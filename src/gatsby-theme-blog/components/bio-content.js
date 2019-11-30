import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
  Personal blog of <Styled.a href="https://mkstevens.tech">Montique Stevens</Styled.a>,
    {` `}
    a Frontend Developer & UI Designer based in New York City.
    <br />
   
  </Fragment>
)
