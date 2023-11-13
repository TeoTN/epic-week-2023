import { Slide, SlideTitle } from "../../components";
import { RichCode } from "../../components/RichCode";

const promise = `
const isThenable = (o) => !!o && typeof o.then === "function";

const safeResolve = (resolve, reject, onValue, value) => {
  if (!onValue) {
    resolve(value);
  }
  try {
    const result = onValue(value);
    if (isThenable(result)) {
      result.then(resolve, reject);
    } else {
      resolve(result);
    }
  } catch (error) {
    reject(error);
  }
};

const safeReject = (reject, onError, cause) => {
  if (!onError) {
    reject(cause);
  }
  try {
    return reject(onError(cause));
  } catch (error) {
    reject(cause);
  }
};

class MyPromise {
  constructor(action) {
    this.state = { type: "pending", subscribers: [] };
    try {
      action(this._doResolve, this._doReject);
    } catch (error) {
      this._doReject(error);
    }
  }

  _doReject = (cause) => {
    if (this.state.type !== "pending") {
      return;
    }
    const { subscribers = [] } = this.state;
    this.state = { type: "rejected", cause };
    if (subscribers.length === 0) {
      throw cause; // Unhandled Promise Rejection
    }
    window.queueMicrotask(() => {
      subscribers.forEach(({ onReject }) => onReject(cause));
    });
  };

  _doResolve = (value) => {
    if (this.state.type !== "pending") {
      return;
    }
    const { subscribers = [] } = this.state;
    this.state = { type: "resolved", value };
    window.queueMicrotask(() => {
      subscribers.forEach(({ onResolve }) => onResolve(value));
    });
  };

  then = (onValue, onReject) => {
    const self = this.state;
    return new MyPromise((resolve, reject) => {
      if (!onValue && !onReject) {
        resolve(undefined);
      } else if (self.type === "pending") {
        self.subscribers.push({
          onResolve: (value) => safeResolve(resolve, reject, onValue, value),
          onReject: (error) => safeReject(reject, onReject, error),
        });
      } else if (self.type === "resolved") {
        window.queueMicrotask(() => {
          safeResolve(resolve, reject, onValue, self.value);
        });
      } else if (self.type === "rejected") {
        window.queueMicrotask(() => {
          safeReject(reject, onReject, self.cause);
        });
      }
    });
  };

  catch = (onReject) => {
    const { then } = this;
    return new MyPromise((resolve, reject) => {
      then(undefined, (cause) => safeResolve(resolve, reject, onReject, cause));
    });
  };

  static resolve(value) {
    return new MyPromise((resolve) => {
      resolve(value);
    });
  }

  static reject(cause) {
    return new MyPromise((_, reject) => {
      reject(cause);
    });
  }
}
`;

export const PromiseImplementation = () => (
  <Slide>
    <SlideTitle>Promise Implementation</SlideTitle>
    <RichCode className="language-js" customStyle={{ fontSize: ".25rem" }}>
      {promise}
    </RichCode>
  </Slide>
);
