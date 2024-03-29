import Link from "next/link"
import classes from "./page.module.css"

function MealsPage() {
    return (
        <>
            <header className={classes.header}>
                <h1>Delicious meals created <span className={classes.highlight}>by you</span></h1>
                <p>Choose your favourite receipe and cook yourself, it will be fun!!</p>
                <p className={classes.cta}>
                    <Link href="/meals/share">
                        Share your favourite recipe
                    </Link>
                </p>
            </header>
            <main className={classes.main}></main>
        </>
    )
}

export default MealsPage