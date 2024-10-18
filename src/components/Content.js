import { Fragment } from "react"
import { DefaultLayout } from "../layouts"
import { publicRoute } from "../routes"
import { Route, Routes, useLocation } from "react-router-dom"

const Content = () => {
    const location = useLocation()
    return (
        <Routes location={location} key={location.pathname}>
            {Object.keys(publicRoute).map((route_key, index) => {
                const Page = publicRoute[route_key].component
                let Layout = DefaultLayout
                if (publicRoute[route_key].layout) {
                    Layout = publicRoute[route_key].layout
                } else if (publicRoute[route_key].layout === null) {
                    Layout = Fragment
                }
                return (
                    <Route key={index} path={publicRoute[route_key].path}
                        element={
                            <Layout>
                                <Page />
                            </Layout>
                        }
                    />
                )
            })}
        </Routes>
    )
}

export default Content