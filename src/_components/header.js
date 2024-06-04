import Link from 'next/link'
const Header = () => {
    return (
        <>
            <div className='header-wrapper'>
                <div className="logo">
                    <img style={{ width: 100 }} src="https://t3.ftcdn.net/jpg/03/33/90/46/360_F_333904627_tnCepUpc3Uynb6stmEbverr8HeWS2VZl.jpg" alt="Logo" />
                </div>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/">Account</Link>
                    </li>
                    <li>
                        <Link href="/">Profile</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header