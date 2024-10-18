
import { Header, Footer } from '../components'

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header />
                <div style={{ minHeight: '1000px' }}>{children}</div>
            <Footer />
        </div>
    )
}

export default DefaultLayout