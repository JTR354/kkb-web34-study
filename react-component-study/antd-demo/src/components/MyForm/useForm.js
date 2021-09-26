import { useRef } from "react";

class FormStore {
  constructor() {
    this.store = {};
    this.queue = new Map();
    this.callbacks = {};
    this.action = 0;
  }

  getFieldValues = () => {
    return { ...this.store };
  };

  getFieldValue = (name) => {
    return this.store[name];
  };

  setFieldValue = (name, value) => {
    this.store[name] = value;
    this.queue.get(name)?.update();
  };

  registerComponent = (name, field) => {
    this.queue.set(name, field);
    return () => {
      this.queue.delete(name);
      delete this.store[name];
    };
  };

  setCallbacks = (cb) => {
    return {
      ...this.setCallbacks,
      ...cb,
    };
  };

  validate = () => {
    let err = [];
    this.queue.forEach((field) => {
      err = err.concat(field.validate());
    });
    return err;
  };

  onSubmit = ({ onFinish, onFinishFailed }) => {
    this.action++;
    const err = this.validate();
    if (err.length) {
      onFinishFailed(err, this.getFieldValues());
    } else {
      onFinish(this.getFieldValues());
    }
  };

  getInstance = () => {
    return {
      getFieldValues: this.getFieldValues,
      getFieldValue: this.getFieldValue,
      setFieldValue: this.setFieldValue,
      registerComponent: this.registerComponent,
      setCallbacks: this.setCallbacks,
      onSubmit: this.onSubmit,
      action: this.action,
    };
  };
}

export default function useForm(form) {
  const formRef = useRef();
  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      const formStore = new FormStore();
      formRef.current = formStore.getInstance();
    }
  }
  return [formRef.current];
}
