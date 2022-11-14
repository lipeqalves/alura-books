const query = window.matchMedia(
    '(prefers-color-scheme: dark)'
)

query.matches;

query.addEventListener('change', res=>{
    res.matches
})

