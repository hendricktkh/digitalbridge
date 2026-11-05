(() => {
  'use strict';
  const dictionaries = Object.fromEntries(['en','zh-Hans','ms','bn','ne','km','my','th','fil'].map(code=>[code,new Map()]));
  for (const [en, zh, ms] of window.digitalBridgeTranslations) {
    dictionaries['zh-Hans'].set(en, zh);
    dictionaries.ms.set(en, ms);
  }
  for (const [code, entries] of Object.entries(window.digitalBridgeExtraTranslations || {})) {
    for (const [source, translated] of Object.entries(entries)) dictionaries[code].set(source, translated);
  }
  const key = 'digital-bridge-language';
  let language = 'en';
  try {
    const saved = localStorage.getItem(key);
    if (Object.hasOwn(dictionaries, saved)) language = saved;
  } catch (_) { /* Language changes also work when storage is unavailable. */ }

  function t(value) {
    if (language === 'en') return value;
    const dictionary = dictionaries[language];
    if (dictionary.has(value)) return dictionary.get(value);
    const format = (key, values) => {
      const template = dictionary.get(key) || key;
      return template.replace(/\{([a-z]+)\}/g, (_, name) => String(values[name]));
    };
    let m;
    if ((m = value.match(/^(\d+) of (\d+) lessons complete$/))) return format('{done} of {total} lessons complete', {done:m[1],total:m[2]});
    if ((m = value.match(/^(\d+) of (\d+) complete$/))) return format('{done} of {total} complete', {done:m[1],total:m[2]});
    if ((m = value.match(/^LESSON (\d+) OF (\d+)$/))) return format('LESSON {number} OF {total}', {number:m[1],total:m[2]});
    if ((m = value.match(/^(\d+) min · Read & practise$/))) return format('{minutes} min · Read & practise', {minutes:m[1]});
    if ((m = value.match(/^(\d+) min$/))) return format('{minutes} min', {minutes:m[1]});
    if ((m = value.match(/^(\d+) lessons$/))) return format('{total} lessons', {total:m[1]});
    if ((m = value.match(/^Try this formula: (.+)$/))) return format('Try this formula: {formula}', {formula:m[1]});
    if ((m = value.match(/^You’ve completed all (\d+) lessons\. Review a course anytime, or try the skills check on the homepage\.$/))) return format('You’ve completed all {total} lessons. Review a course anytime, or try the skills check on the homepage.', {total:m[1]});
    if (value.startsWith('Continue to ')) return format('Continue to {course}', {course:t(value.slice(12))});
    const suffix = ' completed. Your progress has been updated.';
    if (value.endsWith(suffix)) return format('{lesson} completed. Your progress has been updated.', {lesson:t(value.slice(0,-suffix.length))});
    return value;
  }

  const originals = new WeakMap();
  const rendered = new WeakMap();
  const attributeOriginals = new WeakMap();
  const attributeRendered = new WeakMap();
  const originalTitle = document.title;
  const ignored = 'script,style,code,textarea,[data-language-control]';
  let observer;
  let scheduled = false;

  function localiseText(node) {
    if (node.parentElement.closest(ignored)) return;
    const current = node.nodeValue;
    if (!originals.has(node) || current !== rendered.get(node)) originals.set(node, current);
    const original = originals.get(node);
    const trimmed = original.trim().replace(/\s+/g, ' ');
    if (!trimmed) return;
    const translated = t(trimmed);
    const result = original.slice(0, original.search(/\S/)) + translated + (original.match(/\s*$/) || [''])[0];
    if (current !== result) node.nodeValue = result;
    rendered.set(node, result);
  }

  function localiseAttribute(element, attribute) {
    if (!element.hasAttribute(attribute) || element.closest(ignored)) return;
    if (!attributeOriginals.has(element)) {
      attributeOriginals.set(element, new Map());
      attributeRendered.set(element, new Map());
    }
    const source = attributeOriginals.get(element);
    const output = attributeRendered.get(element);
    const current = element.getAttribute(attribute);
    if (!source.has(attribute) || current !== output.get(attribute)) source.set(attribute, current);
    const result = t(source.get(attribute));
    if (current !== result) element.setAttribute(attribute, result);
    output.set(attribute, result);
  }

  function apply() {
    if (observer) observer.disconnect();
    document.documentElement.lang = language;
    document.title = t(originalTitle);
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) localiseText(walker.currentNode);
    document.querySelectorAll('[aria-label],[placeholder],[title],img[alt],meta[name="description"]').forEach(element => {
      for (const attribute of ['aria-label', 'placeholder', 'title', 'alt', 'content']) localiseAttribute(element, attribute);
    });
    const control = document.getElementById('siteLanguage');
    control.value = language;
    document.getElementById('siteLanguageLabel').textContent = t('Language');
    if (observer) observer.observe(document.body, {
      subtree: true, childList: true, characterData: true, attributes: true,
      attributeFilter: ['aria-label', 'placeholder', 'title', 'alt'],
    });
    scheduled = false;
  }

  window.digitalBridgeI18n = Object.freeze({
    t,
    get language() { return language; },
    // Useful for checking coverage without changing lesson content or entered answers.
    untranslated() {
      const missing = new Set();
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      while (walker.nextNode()) {
        const node = walker.currentNode;
        if (node.parentElement.closest(ignored)) continue;
        const source = (originals.get(node) || node.nodeValue).trim().replace(/\s+/g, ' ');
        if (/[a-z]{2}/i.test(source) && t(source) === source) missing.add(source);
      }
      return [...missing];
    },
  });

  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('siteLanguage').addEventListener('change', event => {
      language = event.target.value;
      try { localStorage.setItem(key, language); } catch (_) {}
      apply();
    });
    observer = new MutationObserver(() => {
      if (!scheduled) {
        scheduled = true;
        queueMicrotask(apply);
      }
    });
    apply();
  });
})();
