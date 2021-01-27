import React from 'react'
import  {configure,shallow,render} from 'enzyme'
import adapter from '@wojtekmaj/enzyme-adapter-react-17'
import AllPost from './AllPost'
import {PostComponent} from '../posts/posts'
import Person from '../Person/Person'

configure({adapter:new adapter()})
describe('test',()=>
{
    it('cool',function(){
        var w=shallow(<Person  />);
        w.setProps({'props1':{'Person':{}}})
        expect(w.find('.title')).toEqual(true)      
    })
})