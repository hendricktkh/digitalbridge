# Digital Bridge

A free, account-free digital skills learning site built for GitHub Pages.

## Answer feedback update

Correct answers now show a checkmark, an explicit result heading and a prominent Continue button. The result is brought into view and announced to assistive technology. Successful practice inputs are locked and the Check answer button is replaced by Continue. The skills check also labels the correct option and clearly distinguishes incorrect answers.

## This version

- Rebuilt homepage with a clear course catalogue, topic lists and estimated course lengths.
- Focused classroom with course navigation, a lesson outline, worked examples, optional hints, practice feedback and next-lesson navigation.
- Four subjects, twelve lessons: Computer essentials, Online communication, Spreadsheets and Digital content.
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

Practice is simulated. No email is sent, no files are uploaded, and no real document is changed. Only lesson completion and the last viewed lesson are stored; typed practice drafts are not saved. Switching or reloading lessons discards unfinished input. Some writing tasks check simple structural requirements rather than evaluating writing quality.

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
