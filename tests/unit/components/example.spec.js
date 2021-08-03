import Sidebar from '@/components/Sidebar.vue'
import { createShallow } from '../methods'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = createShallow(Sidebar)
  })
})
