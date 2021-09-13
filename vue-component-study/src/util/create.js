import Vue from "vue";

export default function create(Com, props) {
  const Ctor = Vue.extend(Com);
  const com = new Ctor({
    propsData: props,
  });
  com.$mount();
  document.body.appendChild(com.$el);

  com.remove = () => {
    document.body.removeChild(com.$el);
    com.$destroy();
  };
  return com;
}
