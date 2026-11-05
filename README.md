# Digital Bridge

A free, account-free digital skills learning site built for GitHub Pages.

## Answer feedback update

Correct answers now show a checkmark, an explicit result heading and a prominent Continue button. The result is brought into view and announced to assistive technology. Successful practice inputs are locked and the Check answer button is replaced by Continue. The skills check also labels the correct option and clearly distinguishes incorrect answers.

## This version

- Rebuilt homepage with a clear course catalogue, topic lists and estimated course lengths.
- Focused classroom with course navigation, a lesson outline, worked examples, optional hints, practice feedback and next-lesson navigation.
- Four subjects, forty lessons (ten per subject): Computer essentials, Online communication, Spreadsheets and Digital content.
- Responsive layouts for phones, tablets and desktop screens.
- Completion and the most recently viewed lesson saved in this browser on this device. Reset progress is available in the classroom. Progress does not sync across devices; clearing browser storage removes it. If storage is unavailable, completion lasts for the current page visit.
- No registration, login, subscriptions, analytics, backend or external font dependency.

## Publish on GitHub Pages

1. Extract the ZIP.
2. Upload the contents of the `digital-bridge` folder into your existing GitHub Pages source directory, replacing the previous files. Put `index.html` directly in that directory, not inside another nested folder.
3. Keep `learn.html`, `styles.css`, `script.js`, `learning.js` and `quiz.js` together with `index.html`.
4. Commit and let your existing Pages deployment run. If configuring Pages for the first time, select **Settings → Pages → Deploy from a branch**, then select the branch and source directory containing these files.

All internal URLs are relative, supporting both custom domains and repository paths such as `https://USERNAME.github.io/REPOSITORY/`. No installation or build step is required. `.nojekyll` tells Pages to serve the files directly.

Open `index.html` locally to view the homepage, or `learn.html` to start learning. For consistent browser-storage behaviour, use the hosted site or a local HTTP preview.

## What the practice tasks do

Practice is simulated. No email is sent, no files are uploaded, and no real document is changed. Lesson completion, the last viewed lesson and the language selection are stored; typed practice drafts are not saved. Switching or reloading lessons discards unfinished input. Some writing tasks check simple structural requirements rather than evaluating writing quality.

The skills check is an educational activity, not a formal assessment, certificate or measurement of SDG 4.4.1. Webinar dates and registration remain unannounced.

## Design references

The information structure draws on subject-led course catalogues and sequenced learning activities, including:
- OpenLearn: https://www.open.edu/openlearn/digital/free-courses
- Khan Academy Computing: https://www.khanacademy.org/computing

The site uses its own layout, branding, text and illustrations. There is no affiliation with those platforms.

## Campaign and education sources

- Instagram: https://www.instagram.com/digita1bridge/
- UN Goal 4: https://sdgs.un.org/goals/goal4
- Official indicator metadata: https://unstats.un.org/sdgs/metadata/files/Metadata-04-04-01.pdf

Independent student educational project; not affiliated with the United Nations.


## Languages

Both pages, all forty lessons, worked examples, practice feedback and the skills check support English, Simplified Chinese, Bahasa Melayu, Bengali, Nepali, Khmer, Burmese, Thai and Filipino. Filipino is based largely on Tagalog. Use the language selector in the header. The selection is saved locally when browser storage is available. Switching language keeps the current lesson, typed answers, quiz state and completion records.

Keep `translations.js`, `translations-extra.js`, `i18n.js` and `additional-lessons.js` beside the existing files when publishing. No build step, translation service or account is required. Technical filenames, keyboard shortcuts and spreadsheet formulas remain unchanged so the exercises keep working. The image-description task accepts relevant terms in all nine supported languages. Text input validation checks simple structural requirements, not translation or writing quality.

+
+## Expanded curriculum
+
+Each of the four modules contains ten lessons. The original twelve lesson IDs and the browser-storage key are retained, so existing completion records continue to count. New scenario exercises cover file management, backups, online communication, spreadsheet calculations, data checks and accessible digital content. Course totals and lesson counters update from the full forty-lesson list.
+
+## Translation review
+
+The additional language translations and new-lesson translations are automated drafts generated from the English source copy using Google Translate during preparation. Existing Chinese and Malay translations are retained for the original lessons. The deployed site uses the bundled translations locally; it does not contact a translation API or send learner answers to a translation service.
+
+Translation coverage, variables, technical tokens and exercise behaviour have been checked. The translations have not received independent native-speaker review. Arrange that review before relying on the wording for a public learning programme. Filenames, keyboard shortcuts and spreadsheet formulas intentionally retain their technical spelling.
+