import ContentHeadTop from "../modules/extensions/common/ContentHeadTop"
import { publicRoute } from "../routes"
import React from "react"
import { Link } from "react-router-dom"
import ContentHeadBottom from "../modules/extensions/common/ContentHeadBottom"
import ContentTop from "../modules/extensions/common/ContentTop"
import ContentMiddle from "../modules/extensions/common/ContentMiddle"
import ContentBottom from "../modules/extensions/common/ContentBottom"
import { useSelector } from "react-redux"

import { motion } from 'framer-motion';

const Home = () => {

    const system = useSelector(state => state.system)
    return (
        <motion.div
            //exit={{x: window.innerWidth, transition: {duration: 0.1}}}
        >
            <ContentHeadTop info={system.content_headtop} />
            <ContentHeadBottom info={system.content_headbottom} />
            <ContentTop info={system.content_top} />
            <ContentMiddle info={system.content_middle} />
            <ContentBottom info={system.contebottom} />
        </motion.div>
    )
}

export default React.memo(Home)