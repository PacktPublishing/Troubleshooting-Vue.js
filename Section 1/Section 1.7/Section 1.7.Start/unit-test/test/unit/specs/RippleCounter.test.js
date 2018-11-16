import Vue from 'vue'

// Import the mount() method from the vue-test-utils
// and the component you want to test
import { mount } from '@vue/test-utils'
import RippleCounter from '@/components/RippleCounter'

describe('RippleComponent.vue', () => {

  // Mount the component to a wrapper
  // You can access the actual Vue instance via `wrapper.vm` or just 'vm'
  const Constructor = Vue.extend(RippleCounter)
  const wrapper = mount(RippleCounter)
  const vm = new Constructor().$mount()  

  //Test 1 - setup correct
  test ("Setup correct", ()=>{
    expect(true).toBe(true);
  })
  


  //  //Test 2 - correct content
  // it('should render correct contents:  Ripple Counter - 0', () => {
  //   expect(vm.$el.querySelector('.hello h1').textContent)
  //   .toEqual('Ripple Counter - 0')
  // })



  // //Test 3 - a button exist
  // it('should have a button',()=>{
  //   expect(wrapper.contains("button")).toBe(true)
  // })



  // //Test 4 - Initial value set
  // it('initial value is set to title',() =>{
  //   expect(vm.title).toBe("Ripple Counter")
  // })



  // //Test 5 - counter increments when plus clicked
  // test("increments counter when the plus is clicked",() =>{
  //   expect(wrapper.find("input").element.value).toBe("0")
  //   wrapper.find("#plus").trigger("click")
  //   expect(wrapper.find("input").element.value).toBe("1")
  // })
 


  // //Test 6 - counter set by a user
  // test("counter set to an input from user",() =>{
  //   const textInput = wrapper.find('input[type="text"]')
  //   textInput.setValue('111')
  //   expect(wrapper.find('input').element.value).toBe("111")
  // })


})
