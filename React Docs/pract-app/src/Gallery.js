
export function Intro(){
    return(
        <article>
            <h1>This is My first component in react</h1>
            <ol>
                <li>My name is Joy Kiboi</li>
                <li>I School at dedn Kimathi</li>
            </ol>
        </article>
    )
}

export function Profile(){
    return(
        <img
            src="https://i.imgur.com/MK3eW3Am.jpg"
            alt="Katherine Johnson"
    />
    )
}

export default function Gallery() {
    return (
        <section>
        <Intro/>
        <h1>Amazing scientists</h1>
        <Profile />
        <Profile />
        <Profile />
    </section>
        );
    }