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
    const avatar ="https://i.imgur.com/MK3eW3Am.jpg"
    const description ="Katherine Johnson"

    return(
        <img
        className="avatar"
            src={avatar}
            alt={description}
    />
    )
}

export function MyDetails(){
const name = "Joy Elizabeth Muthoni Kiboi"
    return(
        <h3>My name is {name}.I am an aspiring frontend developer, data analyst and data scientist</h3>
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