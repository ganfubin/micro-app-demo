import React from 'common/react';

import {getCommonFn} from 'common/utils'
import Heading from 'common/Heading'
import ButtonNum from 'common/ButtonNum'

const Home = () => {
  getCommonFn()
  return (<>
    <Heading/>
    <ButtonNum />
    </>)
}

export default Home