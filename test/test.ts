import _c from "..";

export const MyComponent = _c({
  props: {
    p1: String
  },
  data() {
    return { message: "hello" };
  },
  methods: {
    m1() {
      console.log(this.message);
    },
    m2() {
      console.log(this.p1.slice(0));
    }
  }
});
