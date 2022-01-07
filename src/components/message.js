Vue.component('message', {
    props: ['content'],
    template: `
    <div>
        {{ content }}
    </div>`
})