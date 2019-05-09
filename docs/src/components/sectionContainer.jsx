import React from 'react'
import { InView } from 'react-intersection-observer'

const thresholds = []

for (let i=0; i<=1.0; i+= 0.1) {
  thresholds.push(i);
}

const SectionContainer = ({ id, children, forwardedRef, handler }) => (
    <InView threshold={thresholds} onChange={(inView, entry) => handler(id, entry.intersectionRatio)}>
        {children}
    </InView>
)

export default SectionContainer