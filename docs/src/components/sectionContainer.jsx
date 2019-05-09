import React from 'react'
import { InView } from 'react-intersection-observer'

const thresholds = []

for (let i=0; i<=1.0; i+= 0.1) {
  thresholds.push(i);
}

const SectionContainer = ({  children, handler, sectionId }) => (
    <InView id={sectionId} threshold={thresholds} onChange={(inView, entry) => handler(sectionId, entry.intersectionRatio)} className="section w-100">
        {children}
    </InView>
)

export default SectionContainer