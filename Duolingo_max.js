// Shadowrocket Script: Unlock Duolingo Max (AI Tutor + Practice Hub)
var obj = JSON.parse($response.body);

obj['duolingo_plus'] = true;

obj['max_ai_tutor'] = true;

obj['practice_hub'] = true;

if (obj['currentUser']) {
    obj['currentUser']['has_plus'] = true;
    obj['currentUser']['plus_style'] = 'SUPER';
    obj['currentUser']['has_ai_tutor'] = true;
    obj['currentUser']['has_practice_hub'] = true;
}

$done({body: JSON.stringify(obj)});