import {
  addHours,
  addMinutes,
  addQuarters,
  addWeeks,
  differenceInCalendarYears,
  endOfYear,
  getDate,
  getDay,
  getHours,
  getISOWeek,
  getMinutes,
  getMonth,
  getQuarter,
  getSeconds,
  getTime,
  getYear,
  isSameQuarter,
  isSameYear,
  parseISO,
  set,
  setHours,
  setMinutes,
  setQuarter,
  setSeconds,
  startOfQuarter,
  startOfYear,
  subDays,
  subQuarters,
  subWeeks,
  subYears
} from "./chunk-J2GDHIN2.js";
import {
  require_classnames
} from "./chunk-NGZCDZWA.js";
import {
  addDays,
  addMonths,
  addYears,
  differenceInCalendarDays,
  differenceInCalendarMonths,
  endOfDay,
  endOfMonth,
  format,
  init_addDays,
  init_addMonths,
  init_addYears,
  init_differenceInCalendarDays,
  init_differenceInCalendarMonths,
  init_endOfDay,
  init_endOfMonth,
  init_endOfWeek,
  init_format,
  init_isAfter,
  init_isBefore,
  init_isDate,
  init_isEqual,
  init_isSameDay,
  init_isSameMonth,
  init_isValid,
  init_isWithinInterval,
  init_max,
  init_min,
  init_parse,
  init_setMonth,
  init_setYear,
  init_startOfDay,
  init_startOfMonth,
  init_startOfWeek,
  init_subMonths,
  init_toDate,
  isAfter,
  isBefore,
  isDate,
  isEqual,
  isSameDay,
  isSameMonth,
  isValid,
  isWithinInterval,
  max,
  min,
  parse,
  setMonth,
  setYear,
  startOfDay,
  startOfMonth,
  startOfWeek,
  subMonths,
  toDate
} from "./chunk-NKCRT3UK.js";
import "./chunk-XZS7J3SW.js";
import {
  require_warning
} from "./chunk-R2WMPALF.js";
import {
  createPopper
} from "./chunk-T22YZR45.js";
import "./chunk-7PUCBEVK.js";
import {
  require_react_dom
} from "./chunk-OTY6O57J.js";
import {
  require_prop_types
} from "./chunk-P3WVVHHB.js";
import "./chunk-KEE3L4NC.js";
import {
  require_react
} from "./chunk-2PA4WPI3.js";
import {
  __commonJS,
  __toESM
} from "./chunk-ROME4SDB.js";

// node_modules/react-popper/node_modules/react-fast-compare/index.js
var require_react_fast_compare = __commonJS({
  "node_modules/react-popper/node_modules/react-fast-compare/index.js"(exports, module) {
    var hasElementType = typeof Element !== "undefined";
    var hasMap = typeof Map === "function";
    var hasSet = typeof Set === "function";
    var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
    function equal(a, b) {
      if (a === b)
        return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor)
          return false;
        var length, i, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length)
            return false;
          for (i = length; i-- !== 0; )
            if (!equal(a[i], b[i]))
              return false;
          return true;
        }
        var it2;
        if (hasMap && a instanceof Map && b instanceof Map) {
          if (a.size !== b.size)
            return false;
          it2 = a.entries();
          while (!(i = it2.next()).done)
            if (!b.has(i.value[0]))
              return false;
          it2 = a.entries();
          while (!(i = it2.next()).done)
            if (!equal(i.value[1], b.get(i.value[0])))
              return false;
          return true;
        }
        if (hasSet && a instanceof Set && b instanceof Set) {
          if (a.size !== b.size)
            return false;
          it2 = a.entries();
          while (!(i = it2.next()).done)
            if (!b.has(i.value[0]))
              return false;
          return true;
        }
        if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
          length = a.length;
          if (length != b.length)
            return false;
          for (i = length; i-- !== 0; )
            if (a[i] !== b[i])
              return false;
          return true;
        }
        if (a.constructor === RegExp)
          return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === "function" && typeof b.valueOf === "function")
          return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString && typeof a.toString === "function" && typeof b.toString === "function")
          return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length)
          return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
            return false;
        if (hasElementType && a instanceof Element)
          return false;
        for (i = length; i-- !== 0; ) {
          if ((keys[i] === "_owner" || keys[i] === "__v" || keys[i] === "__o") && a.$$typeof) {
            continue;
          }
          if (!equal(a[keys[i]], b[keys[i]]))
            return false;
        }
        return true;
      }
      return a !== a && b !== b;
    }
    module.exports = function isEqual3(a, b) {
      try {
        return equal(a, b);
      } catch (error) {
        if ((error.message || "").match(/stack|recursion/i)) {
          console.warn("react-fast-compare cannot handle circular refs");
          return false;
        }
        throw error;
      }
    };
  }
});

// node_modules/react-datepicker/dist/es/index.js
var import_react2 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
var import_classnames = __toESM(require_classnames());
init_isDate();
init_isValid();
init_format();
init_addDays();
init_addMonths();
init_addYears();
init_subMonths();
init_setMonth();
init_setYear();
init_min();
init_max();
init_differenceInCalendarDays();
init_differenceInCalendarMonths();
init_startOfDay();
init_startOfWeek();
init_startOfMonth();
init_endOfDay();
init_endOfWeek();
init_endOfMonth();
init_isEqual();
init_isSameDay();
init_isSameMonth();
init_isAfter();
init_isBefore();
init_isWithinInterval();
init_toDate();
init_parse();

// node_modules/react-onclickoutside/dist/react-onclickoutside.es.js
var import_react = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function isNodeFound(current, componentNode, ignoreClass) {
  if (current === componentNode) {
    return true;
  }
  if (current.correspondingElement) {
    return current.correspondingElement.classList.contains(ignoreClass);
  }
  return current.classList.contains(ignoreClass);
}
function findHighest(current, componentNode, ignoreClass) {
  if (current === componentNode) {
    return true;
  }
  while (current.parentNode || current.host) {
    if (current.parentNode && isNodeFound(current, componentNode, ignoreClass)) {
      return true;
    }
    current = current.parentNode || current.host;
  }
  return current;
}
function clickedScrollbar(evt) {
  return document.documentElement.clientWidth <= evt.clientX || document.documentElement.clientHeight <= evt.clientY;
}
var testPassiveEventSupport = function testPassiveEventSupport2() {
  if (typeof window === "undefined" || typeof window.addEventListener !== "function") {
    return;
  }
  var passive = false;
  var options = Object.defineProperty({}, "passive", {
    get: function get() {
      passive = true;
    }
  });
  var noop = function noop2() {
  };
  window.addEventListener("testPassiveEventSupport", noop, options);
  window.removeEventListener("testPassiveEventSupport", noop, options);
  return passive;
};
function autoInc(seed) {
  if (seed === void 0) {
    seed = 0;
  }
  return function() {
    return ++seed;
  };
}
var uid = autoInc();
var passiveEventSupport;
var handlersMap = {};
var enabledInstances = {};
var touchEvents = ["touchstart", "touchmove"];
var IGNORE_CLASS_NAME = "ignore-react-onclickoutside";
function getEventHandlerOptions(instance, eventName) {
  var handlerOptions = {};
  var isTouchEvent = touchEvents.indexOf(eventName) !== -1;
  if (isTouchEvent && passiveEventSupport) {
    handlerOptions.passive = !instance.props.preventDefault;
  }
  return handlerOptions;
}
function onClickOutsideHOC(WrappedComponent, config) {
  var _class, _temp;
  var componentName = WrappedComponent.displayName || WrappedComponent.name || "Component";
  return _temp = _class = function(_Component) {
    _inheritsLoose(onClickOutside, _Component);
    function onClickOutside(props) {
      var _this;
      _this = _Component.call(this, props) || this;
      _this.__outsideClickHandler = function(event) {
        if (typeof _this.__clickOutsideHandlerProp === "function") {
          _this.__clickOutsideHandlerProp(event);
          return;
        }
        var instance = _this.getInstance();
        if (typeof instance.props.handleClickOutside === "function") {
          instance.props.handleClickOutside(event);
          return;
        }
        if (typeof instance.handleClickOutside === "function") {
          instance.handleClickOutside(event);
          return;
        }
        throw new Error("WrappedComponent: " + componentName + " lacks a handleClickOutside(event) function for processing outside click events.");
      };
      _this.__getComponentNode = function() {
        var instance = _this.getInstance();
        if (config && typeof config.setClickOutsideRef === "function") {
          return config.setClickOutsideRef()(instance);
        }
        if (typeof instance.setClickOutsideRef === "function") {
          return instance.setClickOutsideRef();
        }
        return (0, import_react_dom.findDOMNode)(instance);
      };
      _this.enableOnClickOutside = function() {
        if (typeof document === "undefined" || enabledInstances[_this._uid]) {
          return;
        }
        if (typeof passiveEventSupport === "undefined") {
          passiveEventSupport = testPassiveEventSupport();
        }
        enabledInstances[_this._uid] = true;
        var events = _this.props.eventTypes;
        if (!events.forEach) {
          events = [events];
        }
        handlersMap[_this._uid] = function(event) {
          if (_this.componentNode === null)
            return;
          if (_this.props.preventDefault) {
            event.preventDefault();
          }
          if (_this.props.stopPropagation) {
            event.stopPropagation();
          }
          if (_this.props.excludeScrollbar && clickedScrollbar(event))
            return;
          var current = event.composed && event.composedPath && event.composedPath().shift() || event.target;
          if (findHighest(current, _this.componentNode, _this.props.outsideClickIgnoreClass) !== document) {
            return;
          }
          _this.__outsideClickHandler(event);
        };
        events.forEach(function(eventName) {
          document.addEventListener(eventName, handlersMap[_this._uid], getEventHandlerOptions(_assertThisInitialized(_this), eventName));
        });
      };
      _this.disableOnClickOutside = function() {
        delete enabledInstances[_this._uid];
        var fn = handlersMap[_this._uid];
        if (fn && typeof document !== "undefined") {
          var events = _this.props.eventTypes;
          if (!events.forEach) {
            events = [events];
          }
          events.forEach(function(eventName) {
            return document.removeEventListener(eventName, fn, getEventHandlerOptions(_assertThisInitialized(_this), eventName));
          });
          delete handlersMap[_this._uid];
        }
      };
      _this.getRef = function(ref) {
        return _this.instanceRef = ref;
      };
      _this._uid = uid();
      return _this;
    }
    var _proto = onClickOutside.prototype;
    _proto.getInstance = function getInstance() {
      if (WrappedComponent.prototype && !WrappedComponent.prototype.isReactComponent) {
        return this;
      }
      var ref = this.instanceRef;
      return ref.getInstance ? ref.getInstance() : ref;
    };
    _proto.componentDidMount = function componentDidMount() {
      if (typeof document === "undefined" || !document.createElement) {
        return;
      }
      var instance = this.getInstance();
      if (config && typeof config.handleClickOutside === "function") {
        this.__clickOutsideHandlerProp = config.handleClickOutside(instance);
        if (typeof this.__clickOutsideHandlerProp !== "function") {
          throw new Error("WrappedComponent: " + componentName + " lacks a function for processing outside click events specified by the handleClickOutside config option.");
        }
      }
      this.componentNode = this.__getComponentNode();
      if (this.props.disableOnClickOutside)
        return;
      this.enableOnClickOutside();
    };
    _proto.componentDidUpdate = function componentDidUpdate() {
      this.componentNode = this.__getComponentNode();
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
      this.disableOnClickOutside();
    };
    _proto.render = function render() {
      var _this$props = this.props;
      _this$props.excludeScrollbar;
      var props = _objectWithoutPropertiesLoose(_this$props, ["excludeScrollbar"]);
      if (WrappedComponent.prototype && WrappedComponent.prototype.isReactComponent) {
        props.ref = this.getRef;
      } else {
        props.wrappedRef = this.getRef;
      }
      props.disableOnClickOutside = this.disableOnClickOutside;
      props.enableOnClickOutside = this.enableOnClickOutside;
      return (0, import_react.createElement)(WrappedComponent, props);
    };
    return onClickOutside;
  }(import_react.Component), _class.displayName = "OnClickOutside(" + componentName + ")", _class.defaultProps = {
    eventTypes: ["mousedown", "touchstart"],
    excludeScrollbar: config && config.excludeScrollbar || false,
    outsideClickIgnoreClass: IGNORE_CLASS_NAME,
    preventDefault: false,
    stopPropagation: false
  }, _class.getClass = function() {
    return WrappedComponent.getClass ? WrappedComponent.getClass() : WrappedComponent;
  }, _temp;
}
var react_onclickoutside_es_default = onClickOutsideHOC;

// node_modules/react-datepicker/dist/es/index.js
var import_react_dom2 = __toESM(require_react_dom());

// node_modules/react-popper/lib/esm/Popper.js
var React4 = __toESM(require_react());

// node_modules/react-popper/lib/esm/Manager.js
var React = __toESM(require_react());
var ManagerReferenceNodeContext = React.createContext();
var ManagerReferenceNodeSetterContext = React.createContext();
function Manager(_ref) {
  var children = _ref.children;
  var _React$useState = React.useState(null), referenceNode = _React$useState[0], setReferenceNode = _React$useState[1];
  var hasUnmounted = React.useRef(false);
  React.useEffect(function() {
    return function() {
      hasUnmounted.current = true;
    };
  }, []);
  var handleSetReferenceNode = React.useCallback(function(node) {
    if (!hasUnmounted.current) {
      setReferenceNode(node);
    }
  }, []);
  return React.createElement(ManagerReferenceNodeContext.Provider, {
    value: referenceNode
  }, React.createElement(ManagerReferenceNodeSetterContext.Provider, {
    value: handleSetReferenceNode
  }, children));
}

// node_modules/react-popper/lib/esm/utils.js
var React2 = __toESM(require_react());
var unwrapArray = function unwrapArray2(arg) {
  return Array.isArray(arg) ? arg[0] : arg;
};
var safeInvoke = function safeInvoke2(fn) {
  if (typeof fn === "function") {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return fn.apply(void 0, args);
  }
};
var setRef = function setRef2(ref, node) {
  if (typeof ref === "function") {
    return safeInvoke(ref, node);
  } else if (ref != null) {
    ref.current = node;
  }
};
var fromEntries = function fromEntries2(entries) {
  return entries.reduce(function(acc, _ref) {
    var key = _ref[0], value = _ref[1];
    acc[key] = value;
    return acc;
  }, {});
};
var useIsomorphicLayoutEffect = typeof window !== "undefined" && window.document && window.document.createElement ? React2.useLayoutEffect : React2.useEffect;

// node_modules/react-popper/lib/esm/usePopper.js
var React3 = __toESM(require_react());
var ReactDOM = __toESM(require_react_dom());
var import_react_fast_compare = __toESM(require_react_fast_compare());
var EMPTY_MODIFIERS = [];
var usePopper = function usePopper2(referenceElement, popperElement, options) {
  if (options === void 0) {
    options = {};
  }
  var prevOptions = React3.useRef(null);
  var optionsWithDefaults = {
    onFirstUpdate: options.onFirstUpdate,
    placement: options.placement || "bottom",
    strategy: options.strategy || "absolute",
    modifiers: options.modifiers || EMPTY_MODIFIERS
  };
  var _React$useState = React3.useState({
    styles: {
      popper: {
        position: optionsWithDefaults.strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), state = _React$useState[0], setState = _React$useState[1];
  var updateStateModifier = React3.useMemo(function() {
    return {
      name: "updateState",
      enabled: true,
      phase: "write",
      fn: function fn(_ref) {
        var state2 = _ref.state;
        var elements = Object.keys(state2.elements);
        ReactDOM.flushSync(function() {
          setState({
            styles: fromEntries(elements.map(function(element) {
              return [element, state2.styles[element] || {}];
            })),
            attributes: fromEntries(elements.map(function(element) {
              return [element, state2.attributes[element]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []);
  var popperOptions = React3.useMemo(function() {
    var newOptions = {
      onFirstUpdate: optionsWithDefaults.onFirstUpdate,
      placement: optionsWithDefaults.placement,
      strategy: optionsWithDefaults.strategy,
      modifiers: [].concat(optionsWithDefaults.modifiers, [updateStateModifier, {
        name: "applyStyles",
        enabled: false
      }])
    };
    if ((0, import_react_fast_compare.default)(prevOptions.current, newOptions)) {
      return prevOptions.current || newOptions;
    } else {
      prevOptions.current = newOptions;
      return newOptions;
    }
  }, [optionsWithDefaults.onFirstUpdate, optionsWithDefaults.placement, optionsWithDefaults.strategy, optionsWithDefaults.modifiers, updateStateModifier]);
  var popperInstanceRef = React3.useRef();
  useIsomorphicLayoutEffect(function() {
    if (popperInstanceRef.current) {
      popperInstanceRef.current.setOptions(popperOptions);
    }
  }, [popperOptions]);
  useIsomorphicLayoutEffect(function() {
    if (referenceElement == null || popperElement == null) {
      return;
    }
    var createPopper2 = options.createPopper || createPopper;
    var popperInstance = createPopper2(referenceElement, popperElement, popperOptions);
    popperInstanceRef.current = popperInstance;
    return function() {
      popperInstance.destroy();
      popperInstanceRef.current = null;
    };
  }, [referenceElement, popperElement, options.createPopper]);
  return {
    state: popperInstanceRef.current ? popperInstanceRef.current.state : null,
    styles: state.styles,
    attributes: state.attributes,
    update: popperInstanceRef.current ? popperInstanceRef.current.update : null,
    forceUpdate: popperInstanceRef.current ? popperInstanceRef.current.forceUpdate : null
  };
};

// node_modules/react-popper/lib/esm/Popper.js
var NOOP = function NOOP2() {
  return void 0;
};
var NOOP_PROMISE = function NOOP_PROMISE2() {
  return Promise.resolve(null);
};
var EMPTY_MODIFIERS2 = [];
function Popper(_ref) {
  var _ref$placement = _ref.placement, placement = _ref$placement === void 0 ? "bottom" : _ref$placement, _ref$strategy = _ref.strategy, strategy = _ref$strategy === void 0 ? "absolute" : _ref$strategy, _ref$modifiers = _ref.modifiers, modifiers = _ref$modifiers === void 0 ? EMPTY_MODIFIERS2 : _ref$modifiers, referenceElement = _ref.referenceElement, onFirstUpdate = _ref.onFirstUpdate, innerRef = _ref.innerRef, children = _ref.children;
  var referenceNode = React4.useContext(ManagerReferenceNodeContext);
  var _React$useState = React4.useState(null), popperElement = _React$useState[0], setPopperElement = _React$useState[1];
  var _React$useState2 = React4.useState(null), arrowElement = _React$useState2[0], setArrowElement = _React$useState2[1];
  React4.useEffect(function() {
    setRef(innerRef, popperElement);
  }, [innerRef, popperElement]);
  var options = React4.useMemo(function() {
    return {
      placement,
      strategy,
      onFirstUpdate,
      modifiers: [].concat(modifiers, [{
        name: "arrow",
        enabled: arrowElement != null,
        options: {
          element: arrowElement
        }
      }])
    };
  }, [placement, strategy, onFirstUpdate, modifiers, arrowElement]);
  var _usePopper = usePopper(referenceElement || referenceNode, popperElement, options), state = _usePopper.state, styles = _usePopper.styles, forceUpdate = _usePopper.forceUpdate, update = _usePopper.update;
  var childrenProps = React4.useMemo(function() {
    return {
      ref: setPopperElement,
      style: styles.popper,
      placement: state ? state.placement : placement,
      hasPopperEscaped: state && state.modifiersData.hide ? state.modifiersData.hide.hasPopperEscaped : null,
      isReferenceHidden: state && state.modifiersData.hide ? state.modifiersData.hide.isReferenceHidden : null,
      arrowProps: {
        style: styles.arrow,
        ref: setArrowElement
      },
      forceUpdate: forceUpdate || NOOP,
      update: update || NOOP_PROMISE
    };
  }, [setPopperElement, setArrowElement, placement, state, styles, update, forceUpdate]);
  return unwrapArray(children)(childrenProps);
}

// node_modules/react-popper/lib/esm/Reference.js
var React5 = __toESM(require_react());
var import_warning = __toESM(require_warning());
function Reference(_ref) {
  var children = _ref.children, innerRef = _ref.innerRef;
  var setReferenceNode = React5.useContext(ManagerReferenceNodeSetterContext);
  var refHandler = React5.useCallback(function(node) {
    setRef(innerRef, node);
    safeInvoke(setReferenceNode, node);
  }, [innerRef, setReferenceNode]);
  React5.useEffect(function() {
    return function() {
      return setRef(innerRef, null);
    };
  }, []);
  React5.useEffect(function() {
    (0, import_warning.default)(Boolean(setReferenceNode), "`Reference` should not be used outside of a `Manager` component.");
  }, [setReferenceNode]);
  return unwrapArray(children)({
    ref: refHandler
  });
}

// node_modules/react-datepicker/dist/es/index.js
function le(e2, t2) {
  var r2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t2 && (n = n.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), r2.push.apply(r2, n);
  }
  return r2;
}
function de(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var r2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? le(Object(r2), true).forEach(function(t3) {
      ye(e2, t3, r2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r2)) : le(Object(r2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(r2, t3));
    });
  }
  return e2;
}
function ue(e2) {
  return ue = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
    return typeof e3;
  } : function(e3) {
    return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
  }, ue(e2);
}
function he(e2, t2) {
  if (!(e2 instanceof t2))
    throw new TypeError("Cannot call a class as a function");
}
function me(e2, t2) {
  for (var r2 = 0; r2 < t2.length; r2++) {
    var n = t2[r2];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e2, _e(n.key), n);
  }
}
function fe(e2, t2, r2) {
  return t2 && me(e2.prototype, t2), r2 && me(e2, r2), Object.defineProperty(e2, "prototype", { writable: false }), e2;
}
function ye(e2, t2, r2) {
  return (t2 = _e(t2)) in e2 ? Object.defineProperty(e2, t2, { value: r2, enumerable: true, configurable: true, writable: true }) : e2[t2] = r2, e2;
}
function ve() {
  return ve = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var r2 = arguments[t2];
      for (var n in r2)
        Object.prototype.hasOwnProperty.call(r2, n) && (e2[n] = r2[n]);
    }
    return e2;
  }, ve.apply(this, arguments);
}
function De(e2, t2) {
  if ("function" != typeof t2 && null !== t2)
    throw new TypeError("Super expression must either be null or a function");
  e2.prototype = Object.create(t2 && t2.prototype, { constructor: { value: e2, writable: true, configurable: true } }), Object.defineProperty(e2, "prototype", { writable: false }), t2 && we(e2, t2);
}
function ge(e2) {
  return ge = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e3) {
    return e3.__proto__ || Object.getPrototypeOf(e3);
  }, ge(e2);
}
function we(e2, t2) {
  return we = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e3, t3) {
    return e3.__proto__ = t3, e3;
  }, we(e2, t2);
}
function ke(e2) {
  if (void 0 === e2)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e2;
}
function be(e2) {
  var t2 = function() {
    if ("undefined" == typeof Reflect || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if ("function" == typeof Proxy)
      return true;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), true;
    } catch (e3) {
      return false;
    }
  }();
  return function() {
    var r2, n = ge(e2);
    if (t2) {
      var o = ge(this).constructor;
      r2 = Reflect.construct(n, arguments, o);
    } else
      r2 = n.apply(this, arguments);
    return function(e3, t3) {
      if (t3 && ("object" == typeof t3 || "function" == typeof t3))
        return t3;
      if (void 0 !== t3)
        throw new TypeError("Derived constructors may only return object or undefined");
      return ke(e3);
    }(this, r2);
  };
}
function Se(e2) {
  return function(e3) {
    if (Array.isArray(e3))
      return Ce(e3);
  }(e2) || function(e3) {
    if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"])
      return Array.from(e3);
  }(e2) || function(e3, t2) {
    if (!e3)
      return;
    if ("string" == typeof e3)
      return Ce(e3, t2);
    var r2 = Object.prototype.toString.call(e3).slice(8, -1);
    "Object" === r2 && e3.constructor && (r2 = e3.constructor.name);
    if ("Map" === r2 || "Set" === r2)
      return Array.from(e3);
    if ("Arguments" === r2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r2))
      return Ce(e3, t2);
  }(e2) || function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function Ce(e2, t2) {
  (null == t2 || t2 > e2.length) && (t2 = e2.length);
  for (var r2 = 0, n = new Array(t2); r2 < t2; r2++)
    n[r2] = e2[r2];
  return n;
}
function _e(e2) {
  var t2 = function(e3, t3) {
    if ("object" != typeof e3 || null === e3)
      return e3;
    var r2 = e3[Symbol.toPrimitive];
    if (void 0 !== r2) {
      var n = r2.call(e3, t3 || "default");
      if ("object" != typeof n)
        return n;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === t3 ? String : Number)(e3);
  }(e2, "string");
  return "symbol" == typeof t2 ? t2 : String(t2);
}
var Me = function(e2, t2) {
  switch (e2) {
    case "P":
      return t2.date({ width: "short" });
    case "PP":
      return t2.date({ width: "medium" });
    case "PPP":
      return t2.date({ width: "long" });
    default:
      return t2.date({ width: "full" });
  }
};
var Ee = function(e2, t2) {
  switch (e2) {
    case "p":
      return t2.time({ width: "short" });
    case "pp":
      return t2.time({ width: "medium" });
    case "ppp":
      return t2.time({ width: "long" });
    default:
      return t2.time({ width: "full" });
  }
};
var Pe = { p: Ee, P: function(e2, t2) {
  var r2, n = e2.match(/(P+)(p+)?/) || [], o = n[1], a = n[2];
  if (!a)
    return Me(e2, t2);
  switch (o) {
    case "P":
      r2 = t2.dateTime({ width: "short" });
      break;
    case "PP":
      r2 = t2.dateTime({ width: "medium" });
      break;
    case "PPP":
      r2 = t2.dateTime({ width: "long" });
      break;
    default:
      r2 = t2.dateTime({ width: "full" });
  }
  return r2.replace("{{date}}", Me(o, t2)).replace("{{time}}", Ee(a, t2));
} };
var Ne = 12;
var xe = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
function Ye(e2) {
  var t2 = e2 ? "string" == typeof e2 || e2 instanceof String ? parseISO(e2) : toDate(e2) : /* @__PURE__ */ new Date();
  return Te(t2) ? t2 : null;
}
function Te(e2, t2) {
  return t2 = t2 || /* @__PURE__ */ new Date("1/1/1000"), isValid(e2) && !isBefore(e2, t2);
}
function Ie(e2, t2, r2) {
  if ("en" === r2)
    return format(e2, t2, { awareOfUnicodeTokens: true });
  var n = Ge(r2);
  return r2 && !n && console.warn('A locale object was not found for the provided string ["'.concat(r2, '"].')), !n && $e() && Ge($e()) && (n = Ge($e())), format(e2, t2, { locale: n || null, awareOfUnicodeTokens: true });
}
function Oe(e2, t2) {
  var r2 = t2.dateFormat, n = t2.locale;
  return e2 && Ie(e2, Array.isArray(r2) ? r2[0] : r2, n) || "";
}
function Re(e2, t2) {
  var r2 = t2.hour, n = void 0 === r2 ? 0 : r2, o = t2.minute, a = void 0 === o ? 0 : o, s = t2.second;
  return setHours(setMinutes(setSeconds(e2, void 0 === s ? 0 : s), a), n);
}
function Le(e2, t2, r2) {
  var n = Ge(t2 || $e());
  return startOfWeek(e2, { locale: n, weekStartsOn: r2 });
}
function Fe(e2) {
  return startOfMonth(e2);
}
function Ae(e2) {
  return startOfYear(e2);
}
function Ke(e2) {
  return startOfQuarter(e2);
}
function Be() {
  return startOfDay(Ye());
}
function Qe(e2, t2) {
  return e2 && t2 ? isSameYear(e2, t2) : !e2 && !t2;
}
function He(e2, t2) {
  return e2 && t2 ? isSameMonth(e2, t2) : !e2 && !t2;
}
function je(e2, t2) {
  return e2 && t2 ? isSameQuarter(e2, t2) : !e2 && !t2;
}
function We(e2, t2) {
  return e2 && t2 ? isSameDay(e2, t2) : !e2 && !t2;
}
function Ve(e2, t2) {
  return e2 && t2 ? isEqual(e2, t2) : !e2 && !t2;
}
function qe(e2, t2, r2) {
  var n, o = startOfDay(t2), a = endOfDay(r2);
  try {
    n = isWithinInterval(e2, { start: o, end: a });
  } catch (e3) {
    n = false;
  }
  return n;
}
function Ue(e2, t2) {
  var r2 = "undefined" != typeof window ? window : globalThis;
  r2.__localeData__ || (r2.__localeData__ = {}), r2.__localeData__[e2] = t2;
}
function ze(e2) {
  ("undefined" != typeof window ? window : globalThis).__localeId__ = e2;
}
function $e() {
  return ("undefined" != typeof window ? window : globalThis).__localeId__;
}
function Ge(e2) {
  if ("string" == typeof e2) {
    var t2 = "undefined" != typeof window ? window : globalThis;
    return t2.__localeData__ ? t2.__localeData__[e2] : null;
  }
  return e2;
}
function Je(e2, t2) {
  return Ie(setMonth(Ye(), e2), "LLLL", t2);
}
function Xe(e2, t2) {
  return Ie(setMonth(Ye(), e2), "LLL", t2);
}
function Ze(e2) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r2 = t2.minDate, n = t2.maxDate, o = t2.excludeDates, a = t2.excludeDateIntervals, s = t2.includeDates, i = t2.includeDateIntervals, p = t2.filterDate;
  return it(e2, { minDate: r2, maxDate: n }) || o && o.some(function(t3) {
    return We(e2, t3);
  }) || a && a.some(function(t3) {
    var r3 = t3.start, n2 = t3.end;
    return isWithinInterval(e2, { start: r3, end: n2 });
  }) || s && !s.some(function(t3) {
    return We(e2, t3);
  }) || i && !i.some(function(t3) {
    var r3 = t3.start, n2 = t3.end;
    return isWithinInterval(e2, { start: r3, end: n2 });
  }) || p && !p(Ye(e2)) || false;
}
function et(e2) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r2 = t2.excludeDates, n = t2.excludeDateIntervals;
  return n && n.length > 0 ? n.some(function(t3) {
    var r3 = t3.start, n2 = t3.end;
    return isWithinInterval(e2, { start: r3, end: n2 });
  }) : r2 && r2.some(function(t3) {
    return We(e2, t3);
  }) || false;
}
function tt(e2) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r2 = t2.minDate, n = t2.maxDate, o = t2.excludeDates, a = t2.includeDates, s = t2.filterDate;
  return it(e2, { minDate: startOfMonth(r2), maxDate: endOfMonth(n) }) || o && o.some(function(t3) {
    return He(e2, t3);
  }) || a && !a.some(function(t3) {
    return He(e2, t3);
  }) || s && !s(Ye(e2)) || false;
}
function rt(e2, t2, r2, n) {
  var o = getYear(e2), a = getMonth(e2), s = getYear(t2), i = getMonth(t2), p = getYear(n);
  return o === s && o === p ? a <= r2 && r2 <= i : o < s ? p === o && a <= r2 || p === s && i >= r2 || p < s && p > o : void 0;
}
function nt(e2) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r2 = t2.minDate, n = t2.maxDate, o = t2.excludeDates, a = t2.includeDates, s = t2.filterDate;
  return it(e2, { minDate: r2, maxDate: n }) || o && o.some(function(t3) {
    return je(e2, t3);
  }) || a && !a.some(function(t3) {
    return je(e2, t3);
  }) || s && !s(Ye(e2)) || false;
}
function ot(e2, t2, r2) {
  if (!isValid(t2) || !isValid(r2))
    return false;
  var n = getYear(t2), a = getYear(r2);
  return n <= e2 && a >= e2;
}
function at(e2) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r2 = t2.minDate, n = t2.maxDate, o = t2.excludeDates, a = t2.includeDates, s = t2.filterDate, i = new Date(e2, 0, 1);
  return it(i, { minDate: startOfYear(r2), maxDate: endOfYear(n) }) || o && o.some(function(e3) {
    return Qe(i, e3);
  }) || a && !a.some(function(e3) {
    return Qe(i, e3);
  }) || s && !s(Ye(i)) || false;
}
function st(e2, t2, r2, n) {
  var o = getYear(e2), a = getQuarter(e2), s = getYear(t2), i = getQuarter(t2), p = getYear(n);
  return o === s && o === p ? a <= r2 && r2 <= i : o < s ? p === o && a <= r2 || p === s && i >= r2 || p < s && p > o : void 0;
}
function it(e2) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r2 = t2.minDate, n = t2.maxDate;
  return r2 && differenceInCalendarDays(e2, r2) < 0 || n && differenceInCalendarDays(e2, n) > 0;
}
function pt(e2, t2) {
  return t2.some(function(t3) {
    return getHours(t3) === getHours(e2) && getMinutes(t3) === getMinutes(e2);
  });
}
function ct(e2) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r2 = t2.excludeTimes, n = t2.includeTimes, o = t2.filterTime;
  return r2 && pt(e2, r2) || n && !pt(e2, n) || o && !o(e2) || false;
}
function lt(e2, t2) {
  var r2 = t2.minTime, n = t2.maxTime;
  if (!r2 || !n)
    throw new Error("Both minTime and maxTime props required");
  var o, a = Ye(), s = setHours(setMinutes(a, getMinutes(e2)), getHours(e2)), i = setHours(setMinutes(a, getMinutes(r2)), getHours(r2)), p = setHours(setMinutes(a, getMinutes(n)), getHours(n));
  try {
    o = !isWithinInterval(s, { start: i, end: p });
  } catch (e3) {
    o = false;
  }
  return o;
}
function dt(e2) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r2 = t2.minDate, n = t2.includeDates, o = subMonths(e2, 1);
  return r2 && differenceInCalendarMonths(r2, o) > 0 || n && n.every(function(e3) {
    return differenceInCalendarMonths(e3, o) > 0;
  }) || false;
}
function ut(e2) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r2 = t2.maxDate, n = t2.includeDates, o = addMonths(e2, 1);
  return r2 && differenceInCalendarMonths(o, r2) > 0 || n && n.every(function(e3) {
    return differenceInCalendarMonths(o, e3) > 0;
  }) || false;
}
function ht(e2) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r2 = t2.minDate, n = t2.includeDates, o = subYears(e2, 1);
  return r2 && differenceInCalendarYears(r2, o) > 0 || n && n.every(function(e3) {
    return differenceInCalendarYears(e3, o) > 0;
  }) || false;
}
function mt(e2) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r2 = t2.maxDate, n = t2.includeDates, o = addYears(e2, 1);
  return r2 && differenceInCalendarYears(o, r2) > 0 || n && n.every(function(e3) {
    return differenceInCalendarYears(o, e3) > 0;
  }) || false;
}
function ft(e2) {
  var t2 = e2.minDate, r2 = e2.includeDates;
  if (r2 && t2) {
    var n = r2.filter(function(e3) {
      return differenceInCalendarDays(e3, t2) >= 0;
    });
    return min(n);
  }
  return r2 ? min(r2) : t2;
}
function yt(e2) {
  var t2 = e2.maxDate, r2 = e2.includeDates;
  if (r2 && t2) {
    var n = r2.filter(function(e3) {
      return differenceInCalendarDays(e3, t2) <= 0;
    });
    return max(n);
  }
  return r2 ? max(r2) : t2;
}
function vt() {
  for (var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "react-datepicker__day--highlighted", r2 = /* @__PURE__ */ new Map(), o = 0, a = e2.length; o < a; o++) {
    var s = e2[o];
    if (isDate(s)) {
      var i = Ie(s, "MM.dd.yyyy"), p = r2.get(i) || [];
      p.includes(t2) || (p.push(t2), r2.set(i, p));
    } else if ("object" === ue(s)) {
      var c = Object.keys(s), l = c[0], d = s[c[0]];
      if ("string" == typeof l && d.constructor === Array)
        for (var u = 0, h = d.length; u < h; u++) {
          var m = Ie(d[u], "MM.dd.yyyy"), f = r2.get(m) || [];
          f.includes(l) || (f.push(l), r2.set(m, f));
        }
    }
  }
  return r2;
}
function Dt() {
  var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "react-datepicker__day--holidays", r2 = /* @__PURE__ */ new Map();
  return e2.forEach(function(e3) {
    var o = e3.date, a = e3.holidayName;
    if (isDate(o)) {
      var s = Ie(o, "MM.dd.yyyy"), i = r2.get(s) || {};
      if (!("className" in i) || i.className !== t2 || (p = i.holidayNames, c = [a], p.length !== c.length || !p.every(function(e4, t3) {
        return e4 === c[t3];
      }))) {
        var p, c;
        i.className = t2;
        var l = i.holidayNames;
        i.holidayNames = l ? [].concat(Se(l), [a]) : [a], r2.set(s, i);
      }
    }
  }), r2;
}
function gt(e2, t2, r2, n, o) {
  for (var a = o.length, p = [], c = 0; c < a; c++) {
    var l = addMinutes(addHours(e2, getHours(o[c])), getMinutes(o[c])), d = addMinutes(e2, (r2 + 1) * n);
    isAfter(l, t2) && isBefore(l, d) && p.push(o[c]);
  }
  return p;
}
function wt(e2) {
  return e2 < 10 ? "0".concat(e2) : "".concat(e2);
}
function kt(e2) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ne, r2 = Math.ceil(getYear(e2) / t2) * t2;
  return { startPeriod: r2 - (t2 - 1), endPeriod: r2 };
}
function bt(e2) {
  var t2 = e2.getSeconds(), r2 = e2.getMilliseconds();
  return toDate(e2.getTime() - 1e3 * t2 - r2);
}
function St(e2, t2, r2, n) {
  for (var o = [], a = 0; a < 2 * t2 + 1; a++) {
    var s = e2 + t2 - a, i = true;
    r2 && (i = getYear(r2) <= s), n && i && (i = getYear(n) >= s), i && o.push(s);
  }
  return o;
}
var Ct = react_onclickoutside_es_default(function(n) {
  De(a, import_react2.default.Component);
  var o = be(a);
  function a(r2) {
    var n2;
    he(this, a), ye(ke(n2 = o.call(this, r2)), "renderOptions", function() {
      var t2 = n2.props.year, r3 = n2.state.yearsList.map(function(r4) {
        return import_react2.default.createElement("div", { className: t2 === r4 ? "react-datepicker__year-option react-datepicker__year-option--selected_year" : "react-datepicker__year-option", key: r4, onClick: n2.onChange.bind(ke(n2), r4), "aria-selected": t2 === r4 ? "true" : void 0 }, t2 === r4 ? import_react2.default.createElement("span", { className: "react-datepicker__year-option--selected" }, "✓") : "", r4);
      }), o2 = n2.props.minDate ? getYear(n2.props.minDate) : null, a2 = n2.props.maxDate ? getYear(n2.props.maxDate) : null;
      return a2 && n2.state.yearsList.find(function(e2) {
        return e2 === a2;
      }) || r3.unshift(import_react2.default.createElement("div", { className: "react-datepicker__year-option", key: "upcoming", onClick: n2.incrementYears }, import_react2.default.createElement("a", { className: "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming" }))), o2 && n2.state.yearsList.find(function(e2) {
        return e2 === o2;
      }) || r3.push(import_react2.default.createElement("div", { className: "react-datepicker__year-option", key: "previous", onClick: n2.decrementYears }, import_react2.default.createElement("a", { className: "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous" }))), r3;
    }), ye(ke(n2), "onChange", function(e2) {
      n2.props.onChange(e2);
    }), ye(ke(n2), "handleClickOutside", function() {
      n2.props.onCancel();
    }), ye(ke(n2), "shiftYears", function(e2) {
      var t2 = n2.state.yearsList.map(function(t3) {
        return t3 + e2;
      });
      n2.setState({ yearsList: t2 });
    }), ye(ke(n2), "incrementYears", function() {
      return n2.shiftYears(1);
    }), ye(ke(n2), "decrementYears", function() {
      return n2.shiftYears(-1);
    });
    var s = r2.yearDropdownItemNumber, i = r2.scrollableYearDropdown, p = s || (i ? 10 : 5);
    return n2.state = { yearsList: St(n2.props.year, p, n2.props.minDate, n2.props.maxDate) }, n2.dropdownRef = (0, import_react2.createRef)(), n2;
  }
  return fe(a, [{ key: "componentDidMount", value: function() {
    var e2 = this.dropdownRef.current;
    if (e2) {
      var t2 = e2.children ? Array.from(e2.children) : null, r2 = t2 ? t2.find(function(e3) {
        return e3.ariaSelected;
      }) : null;
      e2.scrollTop = r2 ? r2.offsetTop + (r2.clientHeight - e2.clientHeight) / 2 : (e2.scrollHeight - e2.clientHeight) / 2;
    }
  } }, { key: "render", value: function() {
    var t2 = (0, import_classnames.default)({ "react-datepicker__year-dropdown": true, "react-datepicker__year-dropdown--scrollable": this.props.scrollableYearDropdown });
    return import_react2.default.createElement("div", { className: t2, ref: this.dropdownRef }, this.renderOptions());
  } }]), a;
}());
var _t = function(t2) {
  De(n, import_react2.default.Component);
  var r2 = be(n);
  function n() {
    var t3;
    he(this, n);
    for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++)
      a[s] = arguments[s];
    return ye(ke(t3 = r2.call.apply(r2, [this].concat(a))), "state", { dropdownVisible: false }), ye(ke(t3), "renderSelectOptions", function() {
      for (var r3 = t3.props.minDate ? getYear(t3.props.minDate) : 1900, n2 = t3.props.maxDate ? getYear(t3.props.maxDate) : 2100, o2 = [], a2 = r3; a2 <= n2; a2++)
        o2.push(import_react2.default.createElement("option", { key: a2, value: a2 }, a2));
      return o2;
    }), ye(ke(t3), "onSelectChange", function(e2) {
      t3.onChange(e2.target.value);
    }), ye(ke(t3), "renderSelectMode", function() {
      return import_react2.default.createElement("select", { value: t3.props.year, className: "react-datepicker__year-select", onChange: t3.onSelectChange }, t3.renderSelectOptions());
    }), ye(ke(t3), "renderReadView", function(r3) {
      return import_react2.default.createElement("div", { key: "read", style: { visibility: r3 ? "visible" : "hidden" }, className: "react-datepicker__year-read-view", onClick: function(e2) {
        return t3.toggleDropdown(e2);
      } }, import_react2.default.createElement("span", { className: "react-datepicker__year-read-view--down-arrow" }), import_react2.default.createElement("span", { className: "react-datepicker__year-read-view--selected-year" }, t3.props.year));
    }), ye(ke(t3), "renderDropdown", function() {
      return import_react2.default.createElement(Ct, { key: "dropdown", year: t3.props.year, onChange: t3.onChange, onCancel: t3.toggleDropdown, minDate: t3.props.minDate, maxDate: t3.props.maxDate, scrollableYearDropdown: t3.props.scrollableYearDropdown, yearDropdownItemNumber: t3.props.yearDropdownItemNumber });
    }), ye(ke(t3), "renderScrollMode", function() {
      var e2 = t3.state.dropdownVisible, r3 = [t3.renderReadView(!e2)];
      return e2 && r3.unshift(t3.renderDropdown()), r3;
    }), ye(ke(t3), "onChange", function(e2) {
      t3.toggleDropdown(), e2 !== t3.props.year && t3.props.onChange(e2);
    }), ye(ke(t3), "toggleDropdown", function(e2) {
      t3.setState({ dropdownVisible: !t3.state.dropdownVisible }, function() {
        t3.props.adjustDateOnChange && t3.handleYearChange(t3.props.date, e2);
      });
    }), ye(ke(t3), "handleYearChange", function(e2, r3) {
      t3.onSelect(e2, r3), t3.setOpen();
    }), ye(ke(t3), "onSelect", function(e2, r3) {
      t3.props.onSelect && t3.props.onSelect(e2, r3);
    }), ye(ke(t3), "setOpen", function() {
      t3.props.setOpen && t3.props.setOpen(true);
    }), t3;
  }
  return fe(n, [{ key: "render", value: function() {
    var t3;
    switch (this.props.dropdownMode) {
      case "scroll":
        t3 = this.renderScrollMode();
        break;
      case "select":
        t3 = this.renderSelectMode();
    }
    return import_react2.default.createElement("div", { className: "react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--".concat(this.props.dropdownMode) }, t3);
  } }]), n;
}();
var Mt = react_onclickoutside_es_default(function(t2) {
  De(n, import_react2.default.Component);
  var r2 = be(n);
  function n() {
    var t3;
    he(this, n);
    for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++)
      a[s] = arguments[s];
    return ye(ke(t3 = r2.call.apply(r2, [this].concat(a))), "isSelectedMonth", function(e2) {
      return t3.props.month === e2;
    }), ye(ke(t3), "renderOptions", function() {
      return t3.props.monthNames.map(function(r3, n2) {
        return import_react2.default.createElement("div", { className: t3.isSelectedMonth(n2) ? "react-datepicker__month-option react-datepicker__month-option--selected_month" : "react-datepicker__month-option", key: r3, onClick: t3.onChange.bind(ke(t3), n2), "aria-selected": t3.isSelectedMonth(n2) ? "true" : void 0 }, t3.isSelectedMonth(n2) ? import_react2.default.createElement("span", { className: "react-datepicker__month-option--selected" }, "✓") : "", r3);
      });
    }), ye(ke(t3), "onChange", function(e2) {
      return t3.props.onChange(e2);
    }), ye(ke(t3), "handleClickOutside", function() {
      return t3.props.onCancel();
    }), t3;
  }
  return fe(n, [{ key: "render", value: function() {
    return import_react2.default.createElement("div", { className: "react-datepicker__month-dropdown" }, this.renderOptions());
  } }]), n;
}());
var Et = function(t2) {
  De(n, import_react2.default.Component);
  var r2 = be(n);
  function n() {
    var t3;
    he(this, n);
    for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++)
      a[s] = arguments[s];
    return ye(ke(t3 = r2.call.apply(r2, [this].concat(a))), "state", { dropdownVisible: false }), ye(ke(t3), "renderSelectOptions", function(t4) {
      return t4.map(function(t5, r3) {
        return import_react2.default.createElement("option", { key: r3, value: r3 }, t5);
      });
    }), ye(ke(t3), "renderSelectMode", function(r3) {
      return import_react2.default.createElement("select", { value: t3.props.month, className: "react-datepicker__month-select", onChange: function(e2) {
        return t3.onChange(e2.target.value);
      } }, t3.renderSelectOptions(r3));
    }), ye(ke(t3), "renderReadView", function(r3, n2) {
      return import_react2.default.createElement("div", { key: "read", style: { visibility: r3 ? "visible" : "hidden" }, className: "react-datepicker__month-read-view", onClick: t3.toggleDropdown }, import_react2.default.createElement("span", { className: "react-datepicker__month-read-view--down-arrow" }), import_react2.default.createElement("span", { className: "react-datepicker__month-read-view--selected-month" }, n2[t3.props.month]));
    }), ye(ke(t3), "renderDropdown", function(r3) {
      return import_react2.default.createElement(Mt, { key: "dropdown", month: t3.props.month, monthNames: r3, onChange: t3.onChange, onCancel: t3.toggleDropdown });
    }), ye(ke(t3), "renderScrollMode", function(e2) {
      var r3 = t3.state.dropdownVisible, n2 = [t3.renderReadView(!r3, e2)];
      return r3 && n2.unshift(t3.renderDropdown(e2)), n2;
    }), ye(ke(t3), "onChange", function(e2) {
      t3.toggleDropdown(), e2 !== t3.props.month && t3.props.onChange(e2);
    }), ye(ke(t3), "toggleDropdown", function() {
      return t3.setState({ dropdownVisible: !t3.state.dropdownVisible });
    }), t3;
  }
  return fe(n, [{ key: "render", value: function() {
    var t3, r3 = this, n2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(this.props.useShortMonthInDropdown ? function(e2) {
      return Xe(e2, r3.props.locale);
    } : function(e2) {
      return Je(e2, r3.props.locale);
    });
    switch (this.props.dropdownMode) {
      case "scroll":
        t3 = this.renderScrollMode(n2);
        break;
      case "select":
        t3 = this.renderSelectMode(n2);
    }
    return import_react2.default.createElement("div", { className: "react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--".concat(this.props.dropdownMode) }, t3);
  } }]), n;
}();
function Pt(e2, t2) {
  for (var r2 = [], n = Fe(e2), o = Fe(t2); !isAfter(n, o); )
    r2.push(Ye(n)), n = addMonths(n, 1);
  return r2;
}
var Nt;
var xt = react_onclickoutside_es_default(function(t2) {
  De(o, import_react2.default.Component);
  var n = be(o);
  function o(t3) {
    var r2;
    return he(this, o), ye(ke(r2 = n.call(this, t3)), "renderOptions", function() {
      return r2.state.monthYearsList.map(function(t4) {
        var n2 = getTime(t4), o2 = Qe(r2.props.date, t4) && He(r2.props.date, t4);
        return import_react2.default.createElement("div", { className: o2 ? "react-datepicker__month-year-option--selected_month-year" : "react-datepicker__month-year-option", key: n2, onClick: r2.onChange.bind(ke(r2), n2), "aria-selected": o2 ? "true" : void 0 }, o2 ? import_react2.default.createElement("span", { className: "react-datepicker__month-year-option--selected" }, "✓") : "", Ie(t4, r2.props.dateFormat, r2.props.locale));
      });
    }), ye(ke(r2), "onChange", function(e2) {
      return r2.props.onChange(e2);
    }), ye(ke(r2), "handleClickOutside", function() {
      r2.props.onCancel();
    }), r2.state = { monthYearsList: Pt(r2.props.minDate, r2.props.maxDate) }, r2;
  }
  return fe(o, [{ key: "render", value: function() {
    var t3 = (0, import_classnames.default)({ "react-datepicker__month-year-dropdown": true, "react-datepicker__month-year-dropdown--scrollable": this.props.scrollableMonthYearDropdown });
    return import_react2.default.createElement("div", { className: t3 }, this.renderOptions());
  } }]), o;
}());
var Yt = function(t2) {
  De(n, import_react2.default.Component);
  var r2 = be(n);
  function n() {
    var t3;
    he(this, n);
    for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++)
      a[s] = arguments[s];
    return ye(ke(t3 = r2.call.apply(r2, [this].concat(a))), "state", { dropdownVisible: false }), ye(ke(t3), "renderSelectOptions", function() {
      for (var r3 = Fe(t3.props.minDate), n2 = Fe(t3.props.maxDate), o2 = []; !isAfter(r3, n2); ) {
        var a2 = getTime(r3);
        o2.push(import_react2.default.createElement("option", { key: a2, value: a2 }, Ie(r3, t3.props.dateFormat, t3.props.locale))), r3 = addMonths(r3, 1);
      }
      return o2;
    }), ye(ke(t3), "onSelectChange", function(e2) {
      t3.onChange(e2.target.value);
    }), ye(ke(t3), "renderSelectMode", function() {
      return import_react2.default.createElement("select", { value: getTime(Fe(t3.props.date)), className: "react-datepicker__month-year-select", onChange: t3.onSelectChange }, t3.renderSelectOptions());
    }), ye(ke(t3), "renderReadView", function(r3) {
      var n2 = Ie(t3.props.date, t3.props.dateFormat, t3.props.locale);
      return import_react2.default.createElement("div", { key: "read", style: { visibility: r3 ? "visible" : "hidden" }, className: "react-datepicker__month-year-read-view", onClick: function(e2) {
        return t3.toggleDropdown(e2);
      } }, import_react2.default.createElement("span", { className: "react-datepicker__month-year-read-view--down-arrow" }), import_react2.default.createElement("span", { className: "react-datepicker__month-year-read-view--selected-month-year" }, n2));
    }), ye(ke(t3), "renderDropdown", function() {
      return import_react2.default.createElement(xt, { key: "dropdown", date: t3.props.date, dateFormat: t3.props.dateFormat, onChange: t3.onChange, onCancel: t3.toggleDropdown, minDate: t3.props.minDate, maxDate: t3.props.maxDate, scrollableMonthYearDropdown: t3.props.scrollableMonthYearDropdown, locale: t3.props.locale });
    }), ye(ke(t3), "renderScrollMode", function() {
      var e2 = t3.state.dropdownVisible, r3 = [t3.renderReadView(!e2)];
      return e2 && r3.unshift(t3.renderDropdown()), r3;
    }), ye(ke(t3), "onChange", function(e2) {
      t3.toggleDropdown();
      var r3 = Ye(parseInt(e2));
      Qe(t3.props.date, r3) && He(t3.props.date, r3) || t3.props.onChange(r3);
    }), ye(ke(t3), "toggleDropdown", function() {
      return t3.setState({ dropdownVisible: !t3.state.dropdownVisible });
    }), t3;
  }
  return fe(n, [{ key: "render", value: function() {
    var t3;
    switch (this.props.dropdownMode) {
      case "scroll":
        t3 = this.renderScrollMode();
        break;
      case "select":
        t3 = this.renderSelectMode();
    }
    return import_react2.default.createElement("div", { className: "react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--".concat(this.props.dropdownMode) }, t3);
  } }]), n;
}();
var Tt = function(t2) {
  De(o, import_react2.default.Component);
  var n = be(o);
  function o() {
    var t3;
    he(this, o);
    for (var a = arguments.length, s = new Array(a), i = 0; i < a; i++)
      s[i] = arguments[i];
    return ye(ke(t3 = n.call.apply(n, [this].concat(s))), "dayEl", import_react2.default.createRef()), ye(ke(t3), "handleClick", function(e2) {
      !t3.isDisabled() && t3.props.onClick && t3.props.onClick(e2);
    }), ye(ke(t3), "handleMouseEnter", function(e2) {
      !t3.isDisabled() && t3.props.onMouseEnter && t3.props.onMouseEnter(e2);
    }), ye(ke(t3), "handleOnKeyDown", function(e2) {
      " " === e2.key && (e2.preventDefault(), e2.key = "Enter"), t3.props.handleOnKeyDown(e2);
    }), ye(ke(t3), "isSameDay", function(e2) {
      return We(t3.props.day, e2);
    }), ye(ke(t3), "isKeyboardSelected", function() {
      return !t3.props.disabledKeyboardNavigation && !t3.isSameDay(t3.props.selected) && t3.isSameDay(t3.props.preSelection);
    }), ye(ke(t3), "isDisabled", function() {
      return Ze(t3.props.day, t3.props);
    }), ye(ke(t3), "isExcluded", function() {
      return et(t3.props.day, t3.props);
    }), ye(ke(t3), "getHighLightedClass", function() {
      var e2 = t3.props, r2 = e2.day, n2 = e2.highlightDates;
      if (!n2)
        return false;
      var o2 = Ie(r2, "MM.dd.yyyy");
      return n2.get(o2);
    }), ye(ke(t3), "getHolidaysClass", function() {
      var e2 = t3.props, r2 = e2.day, n2 = e2.holidays;
      if (!n2)
        return false;
      var o2 = Ie(r2, "MM.dd.yyyy");
      return n2.has(o2) ? [n2.get(o2).className] : void 0;
    }), ye(ke(t3), "isInRange", function() {
      var e2 = t3.props, r2 = e2.day, n2 = e2.startDate, o2 = e2.endDate;
      return !(!n2 || !o2) && qe(r2, n2, o2);
    }), ye(ke(t3), "isInSelectingRange", function() {
      var e2, r2 = t3.props, n2 = r2.day, o2 = r2.selectsStart, a2 = r2.selectsEnd, s2 = r2.selectsRange, i2 = r2.selectsDisabledDaysInRange, p = r2.startDate, c = r2.endDate, l = null !== (e2 = t3.props.selectingDate) && void 0 !== e2 ? e2 : t3.props.preSelection;
      return !(!(o2 || a2 || s2) || !l || !i2 && t3.isDisabled()) && (o2 && c && (isBefore(l, c) || Ve(l, c)) ? qe(n2, l, c) : (a2 && p && (isAfter(l, p) || Ve(l, p)) || !(!s2 || !p || c || !isAfter(l, p) && !Ve(l, p))) && qe(n2, p, l));
    }), ye(ke(t3), "isSelectingRangeStart", function() {
      var e2;
      if (!t3.isInSelectingRange())
        return false;
      var r2 = t3.props, n2 = r2.day, o2 = r2.startDate, a2 = r2.selectsStart, s2 = null !== (e2 = t3.props.selectingDate) && void 0 !== e2 ? e2 : t3.props.preSelection;
      return We(n2, a2 ? s2 : o2);
    }), ye(ke(t3), "isSelectingRangeEnd", function() {
      var e2;
      if (!t3.isInSelectingRange())
        return false;
      var r2 = t3.props, n2 = r2.day, o2 = r2.endDate, a2 = r2.selectsEnd, s2 = r2.selectsRange, i2 = null !== (e2 = t3.props.selectingDate) && void 0 !== e2 ? e2 : t3.props.preSelection;
      return We(n2, a2 || s2 ? i2 : o2);
    }), ye(ke(t3), "isRangeStart", function() {
      var e2 = t3.props, r2 = e2.day, n2 = e2.startDate, o2 = e2.endDate;
      return !(!n2 || !o2) && We(n2, r2);
    }), ye(ke(t3), "isRangeEnd", function() {
      var e2 = t3.props, r2 = e2.day, n2 = e2.startDate, o2 = e2.endDate;
      return !(!n2 || !o2) && We(o2, r2);
    }), ye(ke(t3), "isWeekend", function() {
      var e2 = getDay(t3.props.day);
      return 0 === e2 || 6 === e2;
    }), ye(ke(t3), "isAfterMonth", function() {
      return void 0 !== t3.props.month && (t3.props.month + 1) % 12 === getMonth(t3.props.day);
    }), ye(ke(t3), "isBeforeMonth", function() {
      return void 0 !== t3.props.month && (getMonth(t3.props.day) + 1) % 12 === t3.props.month;
    }), ye(ke(t3), "isCurrentDay", function() {
      return t3.isSameDay(Ye());
    }), ye(ke(t3), "isSelected", function() {
      return t3.isSameDay(t3.props.selected);
    }), ye(ke(t3), "getClassNames", function(e2) {
      var n2, o2 = t3.props.dayClassName ? t3.props.dayClassName(e2) : void 0;
      return (0, import_classnames.default)("react-datepicker__day", o2, "react-datepicker__day--" + Ie(t3.props.day, "ddd", n2), { "react-datepicker__day--disabled": t3.isDisabled(), "react-datepicker__day--excluded": t3.isExcluded(), "react-datepicker__day--selected": t3.isSelected(), "react-datepicker__day--keyboard-selected": t3.isKeyboardSelected(), "react-datepicker__day--range-start": t3.isRangeStart(), "react-datepicker__day--range-end": t3.isRangeEnd(), "react-datepicker__day--in-range": t3.isInRange(), "react-datepicker__day--in-selecting-range": t3.isInSelectingRange(), "react-datepicker__day--selecting-range-start": t3.isSelectingRangeStart(), "react-datepicker__day--selecting-range-end": t3.isSelectingRangeEnd(), "react-datepicker__day--today": t3.isCurrentDay(), "react-datepicker__day--weekend": t3.isWeekend(), "react-datepicker__day--outside-month": t3.isAfterMonth() || t3.isBeforeMonth() }, t3.getHighLightedClass("react-datepicker__day--highlighted"), t3.getHolidaysClass());
    }), ye(ke(t3), "getAriaLabel", function() {
      var e2 = t3.props, r2 = e2.day, n2 = e2.ariaLabelPrefixWhenEnabled, o2 = void 0 === n2 ? "Choose" : n2, a2 = e2.ariaLabelPrefixWhenDisabled, s2 = void 0 === a2 ? "Not available" : a2, i2 = t3.isDisabled() || t3.isExcluded() ? s2 : o2;
      return "".concat(i2, " ").concat(Ie(r2, "PPPP", t3.props.locale));
    }), ye(ke(t3), "getTitle", function() {
      var e2 = t3.props, r2 = e2.day, n2 = e2.holidays, o2 = void 0 === n2 ? /* @__PURE__ */ new Map() : n2, a2 = Ie(r2, "MM.dd.yyyy");
      return o2.has(a2) && o2.get(a2).holidayNames.length > 0 ? o2.get(a2).holidayNames.join(", ") : "";
    }), ye(ke(t3), "getTabIndex", function(e2, r2) {
      var n2 = e2 || t3.props.selected, o2 = r2 || t3.props.preSelection;
      return t3.isKeyboardSelected() || t3.isSameDay(n2) && We(o2, n2) ? 0 : -1;
    }), ye(ke(t3), "handleFocusDay", function() {
      var e2, r2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n2 = false;
      0 === t3.getTabIndex() && !r2.isInputFocused && t3.isSameDay(t3.props.preSelection) && (document.activeElement && document.activeElement !== document.body || (n2 = true), t3.props.inline && !t3.props.shouldFocusDayInline && (n2 = false), t3.props.containerRef && t3.props.containerRef.current && t3.props.containerRef.current.contains(document.activeElement) && document.activeElement.classList.contains("react-datepicker__day") && (n2 = true), t3.props.monthShowsDuplicateDaysEnd && t3.isAfterMonth() && (n2 = false), t3.props.monthShowsDuplicateDaysStart && t3.isBeforeMonth() && (n2 = false)), n2 && (null === (e2 = t3.dayEl.current) || void 0 === e2 || e2.focus({ preventScroll: true }));
    }), ye(ke(t3), "renderDayContents", function() {
      return t3.props.monthShowsDuplicateDaysEnd && t3.isAfterMonth() || t3.props.monthShowsDuplicateDaysStart && t3.isBeforeMonth() ? null : t3.props.renderDayContents ? t3.props.renderDayContents(getDate(t3.props.day), t3.props.day) : getDate(t3.props.day);
    }), ye(ke(t3), "render", function() {
      return import_react2.default.createElement("div", { ref: t3.dayEl, className: t3.getClassNames(t3.props.day), onKeyDown: t3.handleOnKeyDown, onClick: t3.handleClick, onMouseEnter: t3.handleMouseEnter, tabIndex: t3.getTabIndex(), "aria-label": t3.getAriaLabel(), role: "option", title: t3.getTitle(), "aria-disabled": t3.isDisabled(), "aria-current": t3.isCurrentDay() ? "date" : void 0, "aria-selected": t3.isSelected() || t3.isInRange() }, t3.renderDayContents(), "" !== t3.getTitle() && import_react2.default.createElement("span", { className: "holiday-overlay" }, t3.getTitle()));
    }), t3;
  }
  return fe(o, [{ key: "componentDidMount", value: function() {
    this.handleFocusDay();
  } }, { key: "componentDidUpdate", value: function(e2) {
    this.handleFocusDay(e2);
  } }]), o;
}();
var It = function(t2) {
  De(o, import_react2.default.Component);
  var n = be(o);
  function o() {
    var e2;
    he(this, o);
    for (var t3 = arguments.length, r2 = new Array(t3), a = 0; a < t3; a++)
      r2[a] = arguments[a];
    return ye(ke(e2 = n.call.apply(n, [this].concat(r2))), "handleClick", function(t4) {
      e2.props.onClick && e2.props.onClick(t4);
    }), e2;
  }
  return fe(o, [{ key: "render", value: function() {
    var t3 = this.props, n2 = t3.weekNumber, o2 = t3.ariaLabelPrefix, a = void 0 === o2 ? "week " : o2, s = { "react-datepicker__week-number": true, "react-datepicker__week-number--clickable": !!t3.onClick };
    return import_react2.default.createElement("div", { className: (0, import_classnames.default)(s), "aria-label": "".concat(a, " ").concat(this.props.weekNumber), onClick: this.handleClick }, n2);
  } }], [{ key: "defaultProps", get: function() {
    return { ariaLabelPrefix: "week " };
  } }]), o;
}();
var Ot = function(t2) {
  De(n, import_react2.default.Component);
  var r2 = be(n);
  function n() {
    var t3;
    he(this, n);
    for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++)
      a[s] = arguments[s];
    return ye(ke(t3 = r2.call.apply(r2, [this].concat(a))), "handleDayClick", function(e2, r3) {
      t3.props.onDayClick && t3.props.onDayClick(e2, r3);
    }), ye(ke(t3), "handleDayMouseEnter", function(e2) {
      t3.props.onDayMouseEnter && t3.props.onDayMouseEnter(e2);
    }), ye(ke(t3), "handleWeekClick", function(e2, r3, n2) {
      "function" == typeof t3.props.onWeekSelect && t3.props.onWeekSelect(e2, r3, n2), t3.props.shouldCloseOnSelect && t3.props.setOpen(false);
    }), ye(ke(t3), "formatWeekNumber", function(e2) {
      return t3.props.formatWeekNumber ? t3.props.formatWeekNumber(e2) : function(e3, t4) {
        var r3 = t4 && Ge(t4) || $e() && Ge($e());
        return getISOWeek(e3, r3 ? { locale: r3 } : null);
      }(e2);
    }), ye(ke(t3), "renderDays", function() {
      var r3 = Le(t3.props.day, t3.props.locale, t3.props.calendarStartDay), n2 = [], o2 = t3.formatWeekNumber(r3);
      if (t3.props.showWeekNumber) {
        var a2 = t3.props.onWeekSelect ? t3.handleWeekClick.bind(ke(t3), r3, o2) : void 0;
        n2.push(import_react2.default.createElement(It, { key: "W", weekNumber: o2, onClick: a2, ariaLabelPrefix: t3.props.ariaLabelPrefix }));
      }
      return n2.concat([0, 1, 2, 3, 4, 5, 6].map(function(n3) {
        var o3 = addDays(r3, n3);
        return import_react2.default.createElement(Tt, { ariaLabelPrefixWhenEnabled: t3.props.chooseDayAriaLabelPrefix, ariaLabelPrefixWhenDisabled: t3.props.disabledDayAriaLabelPrefix, key: o3.valueOf(), day: o3, month: t3.props.month, onClick: t3.handleDayClick.bind(ke(t3), o3), onMouseEnter: t3.handleDayMouseEnter.bind(ke(t3), o3), minDate: t3.props.minDate, maxDate: t3.props.maxDate, excludeDates: t3.props.excludeDates, excludeDateIntervals: t3.props.excludeDateIntervals, includeDates: t3.props.includeDates, includeDateIntervals: t3.props.includeDateIntervals, highlightDates: t3.props.highlightDates, holidays: t3.props.holidays, selectingDate: t3.props.selectingDate, filterDate: t3.props.filterDate, preSelection: t3.props.preSelection, selected: t3.props.selected, selectsStart: t3.props.selectsStart, selectsEnd: t3.props.selectsEnd, selectsRange: t3.props.selectsRange, selectsDisabledDaysInRange: t3.props.selectsDisabledDaysInRange, startDate: t3.props.startDate, endDate: t3.props.endDate, dayClassName: t3.props.dayClassName, renderDayContents: t3.props.renderDayContents, disabledKeyboardNavigation: t3.props.disabledKeyboardNavigation, handleOnKeyDown: t3.props.handleOnKeyDown, isInputFocused: t3.props.isInputFocused, containerRef: t3.props.containerRef, inline: t3.props.inline, shouldFocusDayInline: t3.props.shouldFocusDayInline, monthShowsDuplicateDaysEnd: t3.props.monthShowsDuplicateDaysEnd, monthShowsDuplicateDaysStart: t3.props.monthShowsDuplicateDaysStart, locale: t3.props.locale });
      }));
    }), t3;
  }
  return fe(n, [{ key: "render", value: function() {
    return import_react2.default.createElement("div", { className: "react-datepicker__week" }, this.renderDays());
  } }], [{ key: "defaultProps", get: function() {
    return { shouldCloseOnSelect: true };
  } }]), n;
}();
var Rt = "two_columns";
var Lt = "three_columns";
var Ft = "four_columns";
var At = (ye(Nt = {}, Rt, { grid: [[0, 1], [2, 3], [4, 5], [6, 7], [8, 9], [10, 11]], verticalNavigationOffset: 2 }), ye(Nt, Lt, { grid: [[0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10, 11]], verticalNavigationOffset: 3 }), ye(Nt, Ft, { grid: [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]], verticalNavigationOffset: 4 }), Nt);
function Kt(e2, t2) {
  return e2 ? Ft : t2 ? Rt : Lt;
}
var Bt = function(t2) {
  De(o, import_react2.default.Component);
  var n = be(o);
  function o() {
    var t3;
    he(this, o);
    for (var a = arguments.length, s = new Array(a), i = 0; i < a; i++)
      s[i] = arguments[i];
    return ye(ke(t3 = n.call.apply(n, [this].concat(s))), "MONTH_REFS", Se(Array(12)).map(function() {
      return import_react2.default.createRef();
    })), ye(ke(t3), "QUARTER_REFS", Se(Array(4)).map(function() {
      return import_react2.default.createRef();
    })), ye(ke(t3), "isDisabled", function(e2) {
      return Ze(e2, t3.props);
    }), ye(ke(t3), "isExcluded", function(e2) {
      return et(e2, t3.props);
    }), ye(ke(t3), "handleDayClick", function(e2, r2) {
      t3.props.onDayClick && t3.props.onDayClick(e2, r2, t3.props.orderInDisplay);
    }), ye(ke(t3), "handleDayMouseEnter", function(e2) {
      t3.props.onDayMouseEnter && t3.props.onDayMouseEnter(e2);
    }), ye(ke(t3), "handleMouseLeave", function() {
      t3.props.onMouseLeave && t3.props.onMouseLeave();
    }), ye(ke(t3), "isRangeStartMonth", function(e2) {
      var r2 = t3.props, n2 = r2.day, o2 = r2.startDate, a2 = r2.endDate;
      return !(!o2 || !a2) && He(setMonth(n2, e2), o2);
    }), ye(ke(t3), "isRangeStartQuarter", function(e2) {
      var r2 = t3.props, n2 = r2.day, o2 = r2.startDate, a2 = r2.endDate;
      return !(!o2 || !a2) && je(setQuarter(n2, e2), o2);
    }), ye(ke(t3), "isRangeEndMonth", function(e2) {
      var r2 = t3.props, n2 = r2.day, o2 = r2.startDate, a2 = r2.endDate;
      return !(!o2 || !a2) && He(setMonth(n2, e2), a2);
    }), ye(ke(t3), "isRangeEndQuarter", function(e2) {
      var r2 = t3.props, n2 = r2.day, o2 = r2.startDate, a2 = r2.endDate;
      return !(!o2 || !a2) && je(setQuarter(n2, e2), a2);
    }), ye(ke(t3), "isInSelectingRangeMonth", function(e2) {
      var r2, n2 = t3.props, o2 = n2.day, a2 = n2.selectsStart, s2 = n2.selectsEnd, i2 = n2.selectsRange, p = n2.startDate, c = n2.endDate, l = null !== (r2 = t3.props.selectingDate) && void 0 !== r2 ? r2 : t3.props.preSelection;
      return !(!(a2 || s2 || i2) || !l) && (a2 && c ? rt(l, c, e2, o2) : (s2 && p || !(!i2 || !p || c)) && rt(p, l, e2, o2));
    }), ye(ke(t3), "isSelectingMonthRangeStart", function(e2) {
      var r2;
      if (!t3.isInSelectingRangeMonth(e2))
        return false;
      var n2 = t3.props, o2 = n2.day, a2 = n2.startDate, s2 = n2.selectsStart, i2 = setMonth(o2, e2), p = null !== (r2 = t3.props.selectingDate) && void 0 !== r2 ? r2 : t3.props.preSelection;
      return He(i2, s2 ? p : a2);
    }), ye(ke(t3), "isSelectingMonthRangeEnd", function(e2) {
      var r2;
      if (!t3.isInSelectingRangeMonth(e2))
        return false;
      var n2 = t3.props, o2 = n2.day, a2 = n2.endDate, s2 = n2.selectsEnd, i2 = n2.selectsRange, p = setMonth(o2, e2), c = null !== (r2 = t3.props.selectingDate) && void 0 !== r2 ? r2 : t3.props.preSelection;
      return He(p, s2 || i2 ? c : a2);
    }), ye(ke(t3), "isInSelectingRangeQuarter", function(e2) {
      var r2, n2 = t3.props, o2 = n2.day, a2 = n2.selectsStart, s2 = n2.selectsEnd, i2 = n2.selectsRange, p = n2.startDate, c = n2.endDate, l = null !== (r2 = t3.props.selectingDate) && void 0 !== r2 ? r2 : t3.props.preSelection;
      return !(!(a2 || s2 || i2) || !l) && (a2 && c ? st(l, c, e2, o2) : (s2 && p || !(!i2 || !p || c)) && st(p, l, e2, o2));
    }), ye(ke(t3), "isWeekInMonth", function(e2) {
      var r2 = t3.props.day, n2 = addDays(e2, 6);
      return He(e2, r2) || He(n2, r2);
    }), ye(ke(t3), "isCurrentMonth", function(e2, t4) {
      return getYear(e2) === getYear(Ye()) && t4 === getMonth(Ye());
    }), ye(ke(t3), "isCurrentQuarter", function(e2, t4) {
      return getYear(e2) === getYear(Ye()) && t4 === getQuarter(Ye());
    }), ye(ke(t3), "isSelectedMonth", function(e2, t4, r2) {
      return getMonth(r2) === t4 && getYear(e2) === getYear(r2);
    }), ye(ke(t3), "isSelectedQuarter", function(e2, t4, r2) {
      return getQuarter(e2) === t4 && getYear(e2) === getYear(r2);
    }), ye(ke(t3), "renderWeeks", function() {
      for (var r2 = [], n2 = t3.props.fixedHeight, o2 = 0, a2 = false, s2 = Le(Fe(t3.props.day), t3.props.locale, t3.props.calendarStartDay); r2.push(import_react2.default.createElement(Ot, { ariaLabelPrefix: t3.props.weekAriaLabelPrefix, chooseDayAriaLabelPrefix: t3.props.chooseDayAriaLabelPrefix, disabledDayAriaLabelPrefix: t3.props.disabledDayAriaLabelPrefix, key: o2, day: s2, month: getMonth(t3.props.day), onDayClick: t3.handleDayClick, onDayMouseEnter: t3.handleDayMouseEnter, onWeekSelect: t3.props.onWeekSelect, formatWeekNumber: t3.props.formatWeekNumber, locale: t3.props.locale, minDate: t3.props.minDate, maxDate: t3.props.maxDate, excludeDates: t3.props.excludeDates, excludeDateIntervals: t3.props.excludeDateIntervals, includeDates: t3.props.includeDates, includeDateIntervals: t3.props.includeDateIntervals, inline: t3.props.inline, shouldFocusDayInline: t3.props.shouldFocusDayInline, highlightDates: t3.props.highlightDates, holidays: t3.props.holidays, selectingDate: t3.props.selectingDate, filterDate: t3.props.filterDate, preSelection: t3.props.preSelection, selected: t3.props.selected, selectsStart: t3.props.selectsStart, selectsEnd: t3.props.selectsEnd, selectsRange: t3.props.selectsRange, selectsDisabledDaysInRange: t3.props.selectsDisabledDaysInRange, showWeekNumber: t3.props.showWeekNumbers, startDate: t3.props.startDate, endDate: t3.props.endDate, dayClassName: t3.props.dayClassName, setOpen: t3.props.setOpen, shouldCloseOnSelect: t3.props.shouldCloseOnSelect, disabledKeyboardNavigation: t3.props.disabledKeyboardNavigation, renderDayContents: t3.props.renderDayContents, handleOnKeyDown: t3.props.handleOnKeyDown, isInputFocused: t3.props.isInputFocused, containerRef: t3.props.containerRef, calendarStartDay: t3.props.calendarStartDay, monthShowsDuplicateDaysEnd: t3.props.monthShowsDuplicateDaysEnd, monthShowsDuplicateDaysStart: t3.props.monthShowsDuplicateDaysStart })), !a2; ) {
        o2++, s2 = addWeeks(s2, 1);
        var i2 = n2 && o2 >= 6, p = !n2 && !t3.isWeekInMonth(s2);
        if (i2 || p) {
          if (!t3.props.peekNextMonth)
            break;
          a2 = true;
        }
      }
      return r2;
    }), ye(ke(t3), "onMonthClick", function(e2, r2) {
      t3.handleDayClick(Fe(setMonth(t3.props.day, r2)), e2);
    }), ye(ke(t3), "onMonthMouseEnter", function(e2) {
      t3.handleDayMouseEnter(Fe(setMonth(t3.props.day, e2)));
    }), ye(ke(t3), "handleMonthNavigation", function(e2, r2) {
      t3.isDisabled(r2) || t3.isExcluded(r2) || (t3.props.setPreSelection(r2), t3.MONTH_REFS[e2].current && t3.MONTH_REFS[e2].current.focus());
    }), ye(ke(t3), "onMonthKeyDown", function(e2, r2) {
      var n2 = t3.props, o2 = n2.selected, a2 = n2.preSelection, s2 = n2.disabledKeyboardNavigation, i2 = n2.showTwoColumnMonthYearPicker, p = n2.showFourColumnMonthYearPicker, c = n2.setPreSelection, d = e2.key;
      if ("Tab" !== d && e2.preventDefault(), !s2) {
        var u = Kt(p, i2), h = At[u].verticalNavigationOffset, m = At[u].grid;
        switch (d) {
          case "Enter":
            t3.onMonthClick(e2, r2), c(o2);
            break;
          case "ArrowRight":
            t3.handleMonthNavigation(11 === r2 ? 0 : r2 + 1, addMonths(a2, 1));
            break;
          case "ArrowLeft":
            t3.handleMonthNavigation(0 === r2 ? 11 : r2 - 1, subMonths(a2, 1));
            break;
          case "ArrowUp":
            t3.handleMonthNavigation(m[0].includes(r2) ? r2 + 12 - h : r2 - h, subMonths(a2, h));
            break;
          case "ArrowDown":
            t3.handleMonthNavigation(m[m.length - 1].includes(r2) ? r2 - 12 + h : r2 + h, addMonths(a2, h));
        }
      }
    }), ye(ke(t3), "onQuarterClick", function(e2, r2) {
      t3.handleDayClick(Ke(setQuarter(t3.props.day, r2)), e2);
    }), ye(ke(t3), "onQuarterMouseEnter", function(e2) {
      t3.handleDayMouseEnter(Ke(setQuarter(t3.props.day, e2)));
    }), ye(ke(t3), "handleQuarterNavigation", function(e2, r2) {
      t3.isDisabled(r2) || t3.isExcluded(r2) || (t3.props.setPreSelection(r2), t3.QUARTER_REFS[e2 - 1].current && t3.QUARTER_REFS[e2 - 1].current.focus());
    }), ye(ke(t3), "onQuarterKeyDown", function(e2, r2) {
      var n2 = e2.key;
      if (!t3.props.disabledKeyboardNavigation)
        switch (n2) {
          case "Enter":
            t3.onQuarterClick(e2, r2), t3.props.setPreSelection(t3.props.selected);
            break;
          case "ArrowRight":
            t3.handleQuarterNavigation(4 === r2 ? 1 : r2 + 1, addQuarters(t3.props.preSelection, 1));
            break;
          case "ArrowLeft":
            t3.handleQuarterNavigation(1 === r2 ? 4 : r2 - 1, subQuarters(t3.props.preSelection, 1));
        }
    }), ye(ke(t3), "getMonthClassNames", function(e2) {
      var n2 = t3.props, o2 = n2.day, a2 = n2.startDate, s2 = n2.endDate, i2 = n2.selected, p = n2.minDate, c = n2.maxDate, l = n2.preSelection, d = n2.monthClassName, u = n2.excludeDates, h = n2.includeDates, m = d ? d(setMonth(o2, e2)) : void 0, f = setMonth(o2, e2);
      return (0, import_classnames.default)("react-datepicker__month-text", "react-datepicker__month-".concat(e2), m, { "react-datepicker__month-text--disabled": (p || c || u || h) && tt(f, t3.props), "react-datepicker__month-text--selected": t3.isSelectedMonth(o2, e2, i2), "react-datepicker__month-text--keyboard-selected": !t3.props.disabledKeyboardNavigation && getMonth(l) === e2, "react-datepicker__month-text--in-selecting-range": t3.isInSelectingRangeMonth(e2), "react-datepicker__month-text--in-range": rt(a2, s2, e2, o2), "react-datepicker__month-text--range-start": t3.isRangeStartMonth(e2), "react-datepicker__month-text--range-end": t3.isRangeEndMonth(e2), "react-datepicker__month-text--selecting-range-start": t3.isSelectingMonthRangeStart(e2), "react-datepicker__month-text--selecting-range-end": t3.isSelectingMonthRangeEnd(e2), "react-datepicker__month-text--today": t3.isCurrentMonth(o2, e2) });
    }), ye(ke(t3), "getTabIndex", function(e2) {
      var r2 = getMonth(t3.props.preSelection);
      return t3.props.disabledKeyboardNavigation || e2 !== r2 ? "-1" : "0";
    }), ye(ke(t3), "getQuarterTabIndex", function(e2) {
      var r2 = getQuarter(t3.props.preSelection);
      return t3.props.disabledKeyboardNavigation || e2 !== r2 ? "-1" : "0";
    }), ye(ke(t3), "getAriaLabel", function(e2) {
      var r2 = t3.props, n2 = r2.chooseDayAriaLabelPrefix, o2 = void 0 === n2 ? "Choose" : n2, a2 = r2.disabledDayAriaLabelPrefix, s2 = void 0 === a2 ? "Not available" : a2, i2 = r2.day, p = setMonth(i2, e2), c = t3.isDisabled(p) || t3.isExcluded(p) ? s2 : o2;
      return "".concat(c, " ").concat(Ie(p, "MMMM yyyy"));
    }), ye(ke(t3), "getQuarterClassNames", function(e2) {
      var n2 = t3.props, o2 = n2.day, a2 = n2.startDate, s2 = n2.endDate, i2 = n2.selected, p = n2.minDate, c = n2.maxDate, l = n2.preSelection;
      return (0, import_classnames.default)("react-datepicker__quarter-text", "react-datepicker__quarter-".concat(e2), { "react-datepicker__quarter-text--disabled": (p || c) && nt(setQuarter(o2, e2), t3.props), "react-datepicker__quarter-text--selected": t3.isSelectedQuarter(o2, e2, i2), "react-datepicker__quarter-text--keyboard-selected": getQuarter(l) === e2, "react-datepicker__quarter-text--in-selecting-range": t3.isInSelectingRangeQuarter(e2), "react-datepicker__quarter-text--in-range": st(a2, s2, e2, o2), "react-datepicker__quarter-text--range-start": t3.isRangeStartQuarter(e2), "react-datepicker__quarter-text--range-end": t3.isRangeEndQuarter(e2) });
    }), ye(ke(t3), "getMonthContent", function(e2) {
      var r2 = t3.props, n2 = r2.showFullMonthYearPicker, o2 = r2.renderMonthContent, a2 = r2.locale, s2 = Xe(e2, a2), i2 = Je(e2, a2);
      return o2 ? o2(e2, s2, i2) : n2 ? i2 : s2;
    }), ye(ke(t3), "getQuarterContent", function(e2) {
      var r2 = t3.props, n2 = r2.renderQuarterContent, o2 = function(e3, t4) {
        return Ie(setQuarter(Ye(), e3), "QQQ", t4);
      }(e2, r2.locale);
      return n2 ? n2(e2, o2) : o2;
    }), ye(ke(t3), "renderMonths", function() {
      var r2 = t3.props, n2 = r2.showTwoColumnMonthYearPicker, o2 = r2.showFourColumnMonthYearPicker, a2 = r2.day, s2 = r2.selected;
      return At[Kt(o2, n2)].grid.map(function(r3, n3) {
        return import_react2.default.createElement("div", { className: "react-datepicker__month-wrapper", key: n3 }, r3.map(function(r4, n4) {
          return import_react2.default.createElement("div", { ref: t3.MONTH_REFS[r4], key: n4, onClick: function(e2) {
            t3.onMonthClick(e2, r4);
          }, onKeyDown: function(e2) {
            t3.onMonthKeyDown(e2, r4);
          }, onMouseEnter: function() {
            return t3.onMonthMouseEnter(r4);
          }, tabIndex: t3.getTabIndex(r4), className: t3.getMonthClassNames(r4), role: "option", "aria-label": t3.getAriaLabel(r4), "aria-current": t3.isCurrentMonth(a2, r4) ? "date" : void 0, "aria-selected": t3.isSelectedMonth(a2, r4, s2) }, t3.getMonthContent(r4));
        }));
      });
    }), ye(ke(t3), "renderQuarters", function() {
      var r2 = t3.props, n2 = r2.day, o2 = r2.selected;
      return import_react2.default.createElement("div", { className: "react-datepicker__quarter-wrapper" }, [1, 2, 3, 4].map(function(r3, a2) {
        return import_react2.default.createElement("div", { key: a2, ref: t3.QUARTER_REFS[a2], role: "option", onClick: function(e2) {
          t3.onQuarterClick(e2, r3);
        }, onKeyDown: function(e2) {
          t3.onQuarterKeyDown(e2, r3);
        }, onMouseEnter: function() {
          return t3.onQuarterMouseEnter(r3);
        }, className: t3.getQuarterClassNames(r3), "aria-selected": t3.isSelectedQuarter(n2, r3, o2), tabIndex: t3.getQuarterTabIndex(r3), "aria-current": t3.isCurrentQuarter(n2, r3) ? "date" : void 0 }, t3.getQuarterContent(r3));
      }));
    }), ye(ke(t3), "getClassNames", function() {
      var e2 = t3.props, n2 = e2.selectingDate, o2 = e2.selectsStart, a2 = e2.selectsEnd, s2 = e2.showMonthYearPicker, i2 = e2.showQuarterYearPicker;
      return (0, import_classnames.default)("react-datepicker__month", { "react-datepicker__month--selecting-range": n2 && (o2 || a2) }, { "react-datepicker__monthPicker": s2 }, { "react-datepicker__quarterPicker": i2 });
    }), t3;
  }
  return fe(o, [{ key: "render", value: function() {
    var t3 = this.props, r2 = t3.showMonthYearPicker, n2 = t3.showQuarterYearPicker, o2 = t3.day, a = t3.ariaLabelPrefix, s = void 0 === a ? "month " : a;
    return import_react2.default.createElement("div", { className: this.getClassNames(), onMouseLeave: this.handleMouseLeave, "aria-label": "".concat(s, " ").concat(Ie(o2, "yyyy-MM")), role: "listbox" }, r2 ? this.renderMonths() : n2 ? this.renderQuarters() : this.renderWeeks());
  } }]), o;
}();
var Qt = function(t2) {
  De(n, import_react2.default.Component);
  var r2 = be(n);
  function n() {
    var t3;
    he(this, n);
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return ye(ke(t3 = r2.call.apply(r2, [this].concat(a))), "state", { height: null }), ye(ke(t3), "handleClick", function(e2) {
      (t3.props.minTime || t3.props.maxTime) && lt(e2, t3.props) || (t3.props.excludeTimes || t3.props.includeTimes || t3.props.filterTime) && ct(e2, t3.props) || t3.props.onChange(e2);
    }), ye(ke(t3), "isSelectedTime", function(e2) {
      return t3.props.selected && (r3 = t3.props.selected, n2 = e2, bt(r3).getTime() === bt(n2).getTime());
      var r3, n2;
    }), ye(ke(t3), "liClasses", function(e2) {
      var r3 = ["react-datepicker__time-list-item", t3.props.timeClassName ? t3.props.timeClassName(e2) : void 0];
      return t3.isSelectedTime(e2) && r3.push("react-datepicker__time-list-item--selected"), ((t3.props.minTime || t3.props.maxTime) && lt(e2, t3.props) || (t3.props.excludeTimes || t3.props.includeTimes || t3.props.filterTime) && ct(e2, t3.props)) && r3.push("react-datepicker__time-list-item--disabled"), t3.props.injectTimes && (60 * getHours(e2) + getMinutes(e2)) % t3.props.intervals != 0 && r3.push("react-datepicker__time-list-item--injected"), r3.join(" ");
    }), ye(ke(t3), "handleOnKeyDown", function(e2, r3) {
      " " === e2.key && (e2.preventDefault(), e2.key = "Enter"), "ArrowUp" !== e2.key && "ArrowLeft" !== e2.key || !e2.target.previousSibling || (e2.preventDefault(), e2.target.previousSibling.focus()), "ArrowDown" !== e2.key && "ArrowRight" !== e2.key || !e2.target.nextSibling || (e2.preventDefault(), e2.target.nextSibling.focus()), "Enter" === e2.key && t3.handleClick(r3), t3.props.handleOnKeyDown(e2);
    }), ye(ke(t3), "renderTimes", function() {
      for (var r3 = [], n2 = t3.props.format ? t3.props.format : "p", o2 = t3.props.intervals, a2 = t3.props.selected || t3.props.openToDate || Ye(), i2 = startOfDay(a2), p = t3.props.injectTimes && t3.props.injectTimes.sort(function(e2, t4) {
        return e2 - t4;
      }), c = 60 * function(e2) {
        var t4 = new Date(e2.getFullYear(), e2.getMonth(), e2.getDate()), r4 = new Date(e2.getFullYear(), e2.getMonth(), e2.getDate(), 24);
        return Math.round((+r4 - +t4) / 36e5);
      }(a2), l = c / o2, d = 0; d < l; d++) {
        var u = addMinutes(i2, d * o2);
        if (r3.push(u), p) {
          var h = gt(i2, u, d, o2, p);
          r3 = r3.concat(h);
        }
      }
      var m = r3.reduce(function(e2, t4) {
        return t4.getTime() <= a2.getTime() ? t4 : e2;
      }, r3[0]);
      return r3.map(function(r4, o3) {
        return import_react2.default.createElement("li", { key: o3, onClick: t3.handleClick.bind(ke(t3), r4), className: t3.liClasses(r4), ref: function(e2) {
          r4 === m && (t3.centerLi = e2);
        }, onKeyDown: function(e2) {
          t3.handleOnKeyDown(e2, r4);
        }, tabIndex: r4 === m ? 0 : -1, role: "option", "aria-selected": t3.isSelectedTime(r4) ? "true" : void 0 }, Ie(r4, n2, t3.props.locale));
      });
    }), t3;
  }
  return fe(n, [{ key: "componentDidMount", value: function() {
    this.list.scrollTop = this.centerLi && n.calcCenterPosition(this.props.monthRef ? this.props.monthRef.clientHeight - this.header.clientHeight : this.list.clientHeight, this.centerLi), this.props.monthRef && this.header && this.setState({ height: this.props.monthRef.clientHeight - this.header.clientHeight });
  } }, { key: "render", value: function() {
    var t3 = this, r3 = this.state.height;
    return import_react2.default.createElement("div", { className: "react-datepicker__time-container ".concat(this.props.todayButton ? "react-datepicker__time-container--with-today-button" : "") }, import_react2.default.createElement("div", { className: "react-datepicker__header react-datepicker__header--time ".concat(this.props.showTimeSelectOnly ? "react-datepicker__header--time--only" : ""), ref: function(e2) {
      t3.header = e2;
    } }, import_react2.default.createElement("div", { className: "react-datepicker-time__header" }, this.props.timeCaption)), import_react2.default.createElement("div", { className: "react-datepicker__time" }, import_react2.default.createElement("div", { className: "react-datepicker__time-box" }, import_react2.default.createElement("ul", { className: "react-datepicker__time-list", ref: function(e2) {
      t3.list = e2;
    }, style: r3 ? { height: r3 } : {}, role: "listbox", "aria-label": this.props.timeCaption }, this.renderTimes()))));
  } }], [{ key: "defaultProps", get: function() {
    return { intervals: 30, onTimeChange: function() {
    }, todayButton: null, timeCaption: "Time" };
  } }]), n;
}();
ye(Qt, "calcCenterPosition", function(e2, t2) {
  return t2.offsetTop - (e2 / 2 - t2.clientHeight / 2);
});
var Ht = function(t2) {
  De(o, import_react2.default.Component);
  var n = be(o);
  function o(t3) {
    var a;
    return he(this, o), ye(ke(a = n.call(this, t3)), "YEAR_REFS", Se(Array(a.props.yearItemNumber)).map(function() {
      return import_react2.default.createRef();
    })), ye(ke(a), "isDisabled", function(e2) {
      return Ze(e2, a.props);
    }), ye(ke(a), "isExcluded", function(e2) {
      return et(e2, a.props);
    }), ye(ke(a), "selectingDate", function() {
      var e2;
      return null !== (e2 = a.props.selectingDate) && void 0 !== e2 ? e2 : a.props.preSelection;
    }), ye(ke(a), "updateFocusOnPaginate", function(e2) {
      var t4 = (function() {
        this.YEAR_REFS[e2].current.focus();
      }).bind(ke(a));
      window.requestAnimationFrame(t4);
    }), ye(ke(a), "handleYearClick", function(e2, t4) {
      a.props.onDayClick && a.props.onDayClick(e2, t4);
    }), ye(ke(a), "handleYearNavigation", function(e2, t4) {
      var r2 = a.props, n2 = r2.date, o2 = r2.yearItemNumber, s = kt(n2, o2).startPeriod;
      a.isDisabled(t4) || a.isExcluded(t4) || (a.props.setPreSelection(t4), e2 - s == -1 ? a.updateFocusOnPaginate(o2 - 1) : e2 - s === o2 ? a.updateFocusOnPaginate(0) : a.YEAR_REFS[e2 - s].current.focus());
    }), ye(ke(a), "isSameDay", function(e2, t4) {
      return We(e2, t4);
    }), ye(ke(a), "isCurrentYear", function(e2) {
      return e2 === getYear(Ye());
    }), ye(ke(a), "isRangeStart", function(e2) {
      return a.props.startDate && a.props.endDate && Qe(setYear(Ye(), e2), a.props.startDate);
    }), ye(ke(a), "isRangeEnd", function(e2) {
      return a.props.startDate && a.props.endDate && Qe(setYear(Ye(), e2), a.props.endDate);
    }), ye(ke(a), "isInRange", function(e2) {
      return ot(e2, a.props.startDate, a.props.endDate);
    }), ye(ke(a), "isInSelectingRange", function(e2) {
      var t4 = a.props, r2 = t4.selectsStart, n2 = t4.selectsEnd, o2 = t4.selectsRange, s = t4.startDate, i = t4.endDate;
      return !(!(r2 || n2 || o2) || !a.selectingDate()) && (r2 && i ? ot(e2, a.selectingDate(), i) : (n2 && s || !(!o2 || !s || i)) && ot(e2, s, a.selectingDate()));
    }), ye(ke(a), "isSelectingRangeStart", function(e2) {
      if (!a.isInSelectingRange(e2))
        return false;
      var t4 = a.props, r2 = t4.startDate, n2 = t4.selectsStart, o2 = setYear(Ye(), e2);
      return Qe(o2, n2 ? a.selectingDate() : r2);
    }), ye(ke(a), "isSelectingRangeEnd", function(e2) {
      if (!a.isInSelectingRange(e2))
        return false;
      var t4 = a.props, r2 = t4.endDate, n2 = t4.selectsEnd, o2 = t4.selectsRange, s = setYear(Ye(), e2);
      return Qe(s, n2 || o2 ? a.selectingDate() : r2);
    }), ye(ke(a), "isKeyboardSelected", function(e2) {
      var t4 = Ae(setYear(a.props.date, e2));
      return !a.props.disabledKeyboardNavigation && !a.props.inline && !We(t4, Ae(a.props.selected)) && We(t4, Ae(a.props.preSelection));
    }), ye(ke(a), "onYearClick", function(e2, t4) {
      var r2 = a.props.date;
      a.handleYearClick(Ae(setYear(r2, t4)), e2);
    }), ye(ke(a), "onYearKeyDown", function(e2, t4) {
      var r2 = e2.key;
      if (!a.props.disabledKeyboardNavigation)
        switch (r2) {
          case "Enter":
            a.onYearClick(e2, t4), a.props.setPreSelection(a.props.selected);
            break;
          case "ArrowRight":
            a.handleYearNavigation(t4 + 1, addYears(a.props.preSelection, 1));
            break;
          case "ArrowLeft":
            a.handleYearNavigation(t4 - 1, subYears(a.props.preSelection, 1));
        }
    }), ye(ke(a), "getYearClassNames", function(e2) {
      var t4 = a.props, n2 = t4.minDate, o2 = t4.maxDate, s = t4.selected, i = t4.excludeDates, p = t4.includeDates, c = t4.filterDate;
      return (0, import_classnames.default)("react-datepicker__year-text", { "react-datepicker__year-text--selected": e2 === getYear(s), "react-datepicker__year-text--disabled": (n2 || o2 || i || p || c) && at(e2, a.props), "react-datepicker__year-text--keyboard-selected": a.isKeyboardSelected(e2), "react-datepicker__year-text--range-start": a.isRangeStart(e2), "react-datepicker__year-text--range-end": a.isRangeEnd(e2), "react-datepicker__year-text--in-range": a.isInRange(e2), "react-datepicker__year-text--in-selecting-range": a.isInSelectingRange(e2), "react-datepicker__year-text--selecting-range-start": a.isSelectingRangeStart(e2), "react-datepicker__year-text--selecting-range-end": a.isSelectingRangeEnd(e2), "react-datepicker__year-text--today": a.isCurrentYear(e2) });
    }), ye(ke(a), "getYearTabIndex", function(e2) {
      return a.props.disabledKeyboardNavigation ? "-1" : e2 === getYear(a.props.preSelection) ? "0" : "-1";
    }), ye(ke(a), "getYearContainerClassNames", function() {
      var e2 = a.props, t4 = e2.selectingDate, n2 = e2.selectsStart, o2 = e2.selectsEnd, s = e2.selectsRange;
      return (0, import_classnames.default)("react-datepicker__year", { "react-datepicker__year--selecting-range": t4 && (n2 || o2 || s) });
    }), ye(ke(a), "getYearContent", function(e2) {
      return a.props.renderYearContent ? a.props.renderYearContent(e2) : e2;
    }), a;
  }
  return fe(o, [{ key: "render", value: function() {
    for (var t3 = this, r2 = [], n2 = this.props, o2 = n2.date, a = n2.yearItemNumber, s = n2.onYearMouseEnter, i = n2.onYearMouseLeave, p = kt(o2, a), c = p.startPeriod, l = p.endPeriod, d = function(n3) {
      r2.push(import_react2.default.createElement("div", { ref: t3.YEAR_REFS[n3 - c], onClick: function(e2) {
        t3.onYearClick(e2, n3);
      }, onKeyDown: function(e2) {
        t3.onYearKeyDown(e2, n3);
      }, tabIndex: t3.getYearTabIndex(n3), className: t3.getYearClassNames(n3), onMouseEnter: function(e2) {
        return s(e2, n3);
      }, onMouseLeave: function(e2) {
        return i(e2, n3);
      }, key: n3, "aria-current": t3.isCurrentYear(n3) ? "date" : void 0 }, t3.getYearContent(n3)));
    }, u = c; u <= l; u++)
      d(u);
    return import_react2.default.createElement("div", { className: this.getYearContainerClassNames() }, import_react2.default.createElement("div", { className: "react-datepicker__year-wrapper", onMouseLeave: this.props.clearSelectingDate }, r2));
  } }]), o;
}();
var jt = function(t2) {
  De(n, import_react2.default.Component);
  var r2 = be(n);
  function n(t3) {
    var o;
    return he(this, n), ye(ke(o = r2.call(this, t3)), "onTimeChange", function(e2) {
      o.setState({ time: e2 });
      var t4 = /* @__PURE__ */ new Date();
      t4.setHours(e2.split(":")[0]), t4.setMinutes(e2.split(":")[1]), o.props.onChange(t4);
    }), ye(ke(o), "renderTimeInput", function() {
      var t4 = o.state.time, r3 = o.props, n2 = r3.date, a = r3.timeString, s = r3.customTimeInput;
      return s ? import_react2.default.cloneElement(s, { date: n2, value: t4, onChange: o.onTimeChange }) : import_react2.default.createElement("input", { type: "time", className: "react-datepicker-time__input", placeholder: "Time", name: "time-input", required: true, value: t4, onChange: function(e2) {
        o.onTimeChange(e2.target.value || a);
      } });
    }), o.state = { time: o.props.timeString }, o;
  }
  return fe(n, [{ key: "render", value: function() {
    return import_react2.default.createElement("div", { className: "react-datepicker__input-time-container" }, import_react2.default.createElement("div", { className: "react-datepicker-time__caption" }, this.props.timeInputLabel), import_react2.default.createElement("div", { className: "react-datepicker-time__input-container" }, import_react2.default.createElement("div", { className: "react-datepicker-time__input" }, this.renderTimeInput())));
  } }], [{ key: "getDerivedStateFromProps", value: function(e2, t3) {
    return e2.timeString !== t3.time ? { time: e2.timeString } : null;
  } }]), n;
}();
function Wt(t2) {
  var r2 = t2.className, n = t2.children, o = t2.showPopperArrow, a = t2.arrowProps, s = void 0 === a ? {} : a;
  return import_react2.default.createElement("div", { className: r2 }, o && import_react2.default.createElement("div", ve({ className: "react-datepicker__triangle" }, s)), n);
}
var Vt = ["react-datepicker__year-select", "react-datepicker__month-select", "react-datepicker__month-year-select"];
var qt = function(t2) {
  De(o, import_react2.default.Component);
  var n = be(o);
  function o(t3) {
    var a;
    return he(this, o), ye(ke(a = n.call(this, t3)), "handleClickOutside", function(e2) {
      a.props.onClickOutside(e2);
    }), ye(ke(a), "setClickOutsideRef", function() {
      return a.containerRef.current;
    }), ye(ke(a), "handleDropdownFocus", function(e2) {
      (function() {
        var e3 = ((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).className || "").split(/\s+/);
        return Vt.some(function(t4) {
          return e3.indexOf(t4) >= 0;
        });
      })(e2.target) && a.props.onDropdownFocus();
    }), ye(ke(a), "getDateInView", function() {
      var e2 = a.props, t4 = e2.preSelection, r2 = e2.selected, n2 = e2.openToDate, o2 = ft(a.props), s = yt(a.props), i = Ye(), p = n2 || r2 || t4;
      return p || (o2 && isBefore(i, o2) ? o2 : s && isAfter(i, s) ? s : i);
    }), ye(ke(a), "increaseMonth", function() {
      a.setState(function(e2) {
        var t4 = e2.date;
        return { date: addMonths(t4, 1) };
      }, function() {
        return a.handleMonthChange(a.state.date);
      });
    }), ye(ke(a), "decreaseMonth", function() {
      a.setState(function(e2) {
        var t4 = e2.date;
        return { date: subMonths(t4, 1) };
      }, function() {
        return a.handleMonthChange(a.state.date);
      });
    }), ye(ke(a), "handleDayClick", function(e2, t4, r2) {
      a.props.onSelect(e2, t4, r2), a.props.setPreSelection && a.props.setPreSelection(e2);
    }), ye(ke(a), "handleDayMouseEnter", function(e2) {
      a.setState({ selectingDate: e2 }), a.props.onDayMouseEnter && a.props.onDayMouseEnter(e2);
    }), ye(ke(a), "handleMonthMouseLeave", function() {
      a.setState({ selectingDate: null }), a.props.onMonthMouseLeave && a.props.onMonthMouseLeave();
    }), ye(ke(a), "handleYearMouseEnter", function(e2, t4) {
      a.setState({ selectingDate: setYear(Ye(), t4) }), a.props.onYearMouseEnter && a.props.onYearMouseEnter(e2, t4);
    }), ye(ke(a), "handleYearMouseLeave", function(e2, t4) {
      a.props.onYearMouseLeave && a.props.onYearMouseLeave(e2, t4);
    }), ye(ke(a), "handleYearChange", function(e2) {
      a.props.onYearChange && (a.props.onYearChange(e2), a.setState({ isRenderAriaLiveMessage: true })), a.props.adjustDateOnChange && (a.props.onSelect && a.props.onSelect(e2), a.props.setOpen && a.props.setOpen(true)), a.props.setPreSelection && a.props.setPreSelection(e2);
    }), ye(ke(a), "handleMonthChange", function(e2) {
      a.handleCustomMonthChange(e2), a.props.adjustDateOnChange && (a.props.onSelect && a.props.onSelect(e2), a.props.setOpen && a.props.setOpen(true)), a.props.setPreSelection && a.props.setPreSelection(e2);
    }), ye(ke(a), "handleCustomMonthChange", function(e2) {
      a.props.onMonthChange && (a.props.onMonthChange(e2), a.setState({ isRenderAriaLiveMessage: true }));
    }), ye(ke(a), "handleMonthYearChange", function(e2) {
      a.handleYearChange(e2), a.handleMonthChange(e2);
    }), ye(ke(a), "changeYear", function(e2) {
      a.setState(function(t4) {
        var r2 = t4.date;
        return { date: setYear(r2, e2) };
      }, function() {
        return a.handleYearChange(a.state.date);
      });
    }), ye(ke(a), "changeMonth", function(e2) {
      a.setState(function(t4) {
        var r2 = t4.date;
        return { date: setMonth(r2, e2) };
      }, function() {
        return a.handleMonthChange(a.state.date);
      });
    }), ye(ke(a), "changeMonthYear", function(e2) {
      a.setState(function(t4) {
        var r2 = t4.date;
        return { date: setYear(setMonth(r2, getMonth(e2)), getYear(e2)) };
      }, function() {
        return a.handleMonthYearChange(a.state.date);
      });
    }), ye(ke(a), "header", function() {
      var t4 = Le(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.state.date, a.props.locale, a.props.calendarStartDay), n2 = [];
      return a.props.showWeekNumbers && n2.push(import_react2.default.createElement("div", { key: "W", className: "react-datepicker__day-name" }, a.props.weekLabel || "#")), n2.concat([0, 1, 2, 3, 4, 5, 6].map(function(n3) {
        var o2 = addDays(t4, n3), s = a.formatWeekday(o2, a.props.locale), i = a.props.weekDayClassName ? a.props.weekDayClassName(o2) : void 0;
        return import_react2.default.createElement("div", { key: n3, className: (0, import_classnames.default)("react-datepicker__day-name", i) }, s);
      }));
    }), ye(ke(a), "formatWeekday", function(e2, t4) {
      return a.props.formatWeekDay ? function(e3, t5, r2) {
        return t5(Ie(e3, "EEEE", r2));
      }(e2, a.props.formatWeekDay, t4) : a.props.useWeekdaysShort ? function(e3, t5) {
        return Ie(e3, "EEE", t5);
      }(e2, t4) : function(e3, t5) {
        return Ie(e3, "EEEEEE", t5);
      }(e2, t4);
    }), ye(ke(a), "decreaseYear", function() {
      a.setState(function(e2) {
        var t4 = e2.date;
        return { date: subYears(t4, a.props.showYearPicker ? a.props.yearItemNumber : 1) };
      }, function() {
        return a.handleYearChange(a.state.date);
      });
    }), ye(ke(a), "clearSelectingDate", function() {
      a.setState({ selectingDate: null });
    }), ye(ke(a), "renderPreviousButton", function() {
      if (!a.props.renderCustomHeader) {
        var t4;
        switch (true) {
          case a.props.showMonthYearPicker:
            t4 = ht(a.state.date, a.props);
            break;
          case a.props.showYearPicker:
            t4 = function(e2) {
              var t5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r3 = t5.minDate, n3 = t5.yearItemNumber, o3 = void 0 === n3 ? Ne : n3, a2 = kt(Ae(subYears(e2, o3)), o3).endPeriod, s2 = r3 && getYear(r3);
              return s2 && s2 > a2 || false;
            }(a.state.date, a.props);
            break;
          default:
            t4 = dt(a.state.date, a.props);
        }
        if ((a.props.forceShowMonthNavigation || a.props.showDisabledMonthNavigation || !t4) && !a.props.showTimeSelectOnly) {
          var r2 = ["react-datepicker__navigation", "react-datepicker__navigation--previous"], n2 = a.decreaseMonth;
          (a.props.showMonthYearPicker || a.props.showQuarterYearPicker || a.props.showYearPicker) && (n2 = a.decreaseYear), t4 && a.props.showDisabledMonthNavigation && (r2.push("react-datepicker__navigation--previous--disabled"), n2 = null);
          var o2 = a.props.showMonthYearPicker || a.props.showQuarterYearPicker || a.props.showYearPicker, s = a.props, i = s.previousMonthButtonLabel, p = s.previousYearButtonLabel, c = a.props, l = c.previousMonthAriaLabel, d = void 0 === l ? "string" == typeof i ? i : "Previous Month" : l, u = c.previousYearAriaLabel, h = void 0 === u ? "string" == typeof p ? p : "Previous Year" : u;
          return import_react2.default.createElement("button", { type: "button", className: r2.join(" "), onClick: n2, onKeyDown: a.props.handleOnKeyDown, "aria-label": o2 ? h : d }, import_react2.default.createElement("span", { className: ["react-datepicker__navigation-icon", "react-datepicker__navigation-icon--previous"].join(" ") }, o2 ? a.props.previousYearButtonLabel : a.props.previousMonthButtonLabel));
        }
      }
    }), ye(ke(a), "increaseYear", function() {
      a.setState(function(e2) {
        var t4 = e2.date;
        return { date: addYears(t4, a.props.showYearPicker ? a.props.yearItemNumber : 1) };
      }, function() {
        return a.handleYearChange(a.state.date);
      });
    }), ye(ke(a), "renderNextButton", function() {
      if (!a.props.renderCustomHeader) {
        var t4;
        switch (true) {
          case a.props.showMonthYearPicker:
            t4 = mt(a.state.date, a.props);
            break;
          case a.props.showYearPicker:
            t4 = function(e2) {
              var t5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r3 = t5.maxDate, n3 = t5.yearItemNumber, o3 = void 0 === n3 ? Ne : n3, a2 = kt(addYears(e2, o3), o3).startPeriod, s2 = r3 && getYear(r3);
              return s2 && s2 < a2 || false;
            }(a.state.date, a.props);
            break;
          default:
            t4 = ut(a.state.date, a.props);
        }
        if ((a.props.forceShowMonthNavigation || a.props.showDisabledMonthNavigation || !t4) && !a.props.showTimeSelectOnly) {
          var r2 = ["react-datepicker__navigation", "react-datepicker__navigation--next"];
          a.props.showTimeSelect && r2.push("react-datepicker__navigation--next--with-time"), a.props.todayButton && r2.push("react-datepicker__navigation--next--with-today-button");
          var n2 = a.increaseMonth;
          (a.props.showMonthYearPicker || a.props.showQuarterYearPicker || a.props.showYearPicker) && (n2 = a.increaseYear), t4 && a.props.showDisabledMonthNavigation && (r2.push("react-datepicker__navigation--next--disabled"), n2 = null);
          var o2 = a.props.showMonthYearPicker || a.props.showQuarterYearPicker || a.props.showYearPicker, s = a.props, i = s.nextMonthButtonLabel, p = s.nextYearButtonLabel, c = a.props, l = c.nextMonthAriaLabel, d = void 0 === l ? "string" == typeof i ? i : "Next Month" : l, h = c.nextYearAriaLabel, m = void 0 === h ? "string" == typeof p ? p : "Next Year" : h;
          return import_react2.default.createElement("button", { type: "button", className: r2.join(" "), onClick: n2, onKeyDown: a.props.handleOnKeyDown, "aria-label": o2 ? m : d }, import_react2.default.createElement("span", { className: ["react-datepicker__navigation-icon", "react-datepicker__navigation-icon--next"].join(" ") }, o2 ? a.props.nextYearButtonLabel : a.props.nextMonthButtonLabel));
        }
      }
    }), ye(ke(a), "renderCurrentMonth", function() {
      var t4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.state.date, r2 = ["react-datepicker__current-month"];
      return a.props.showYearDropdown && r2.push("react-datepicker__current-month--hasYearDropdown"), a.props.showMonthDropdown && r2.push("react-datepicker__current-month--hasMonthDropdown"), a.props.showMonthYearDropdown && r2.push("react-datepicker__current-month--hasMonthYearDropdown"), import_react2.default.createElement("div", { className: r2.join(" ") }, Ie(t4, a.props.dateFormat, a.props.locale));
    }), ye(ke(a), "renderYearDropdown", function() {
      var t4 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      if (a.props.showYearDropdown && !t4)
        return import_react2.default.createElement(_t, { adjustDateOnChange: a.props.adjustDateOnChange, date: a.state.date, onSelect: a.props.onSelect, setOpen: a.props.setOpen, dropdownMode: a.props.dropdownMode, onChange: a.changeYear, minDate: a.props.minDate, maxDate: a.props.maxDate, year: getYear(a.state.date), scrollableYearDropdown: a.props.scrollableYearDropdown, yearDropdownItemNumber: a.props.yearDropdownItemNumber });
    }), ye(ke(a), "renderMonthDropdown", function() {
      var t4 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      if (a.props.showMonthDropdown && !t4)
        return import_react2.default.createElement(Et, { dropdownMode: a.props.dropdownMode, locale: a.props.locale, onChange: a.changeMonth, month: getMonth(a.state.date), useShortMonthInDropdown: a.props.useShortMonthInDropdown });
    }), ye(ke(a), "renderMonthYearDropdown", function() {
      var t4 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      if (a.props.showMonthYearDropdown && !t4)
        return import_react2.default.createElement(Yt, { dropdownMode: a.props.dropdownMode, locale: a.props.locale, dateFormat: a.props.dateFormat, onChange: a.changeMonthYear, minDate: a.props.minDate, maxDate: a.props.maxDate, date: a.state.date, scrollableMonthYearDropdown: a.props.scrollableMonthYearDropdown });
    }), ye(ke(a), "handleTodayButtonClick", function(e2) {
      a.props.onSelect(Be(), e2), a.props.setPreSelection && a.props.setPreSelection(Be());
    }), ye(ke(a), "renderTodayButton", function() {
      if (a.props.todayButton && !a.props.showTimeSelectOnly)
        return import_react2.default.createElement("div", { className: "react-datepicker__today-button", onClick: function(e2) {
          return a.handleTodayButtonClick(e2);
        } }, a.props.todayButton);
    }), ye(ke(a), "renderDefaultHeader", function(t4) {
      var r2 = t4.monthDate, n2 = t4.i;
      return import_react2.default.createElement("div", { className: "react-datepicker__header ".concat(a.props.showTimeSelect ? "react-datepicker__header--has-time-select" : "") }, a.renderCurrentMonth(r2), import_react2.default.createElement("div", { className: "react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(a.props.dropdownMode), onFocus: a.handleDropdownFocus }, a.renderMonthDropdown(0 !== n2), a.renderMonthYearDropdown(0 !== n2), a.renderYearDropdown(0 !== n2)), import_react2.default.createElement("div", { className: "react-datepicker__day-names" }, a.header(r2)));
    }), ye(ke(a), "renderCustomHeader", function() {
      var t4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r2 = t4.monthDate, n2 = t4.i;
      if (a.props.showTimeSelect && !a.state.monthContainer || a.props.showTimeSelectOnly)
        return null;
      var o2 = dt(a.state.date, a.props), s = ut(a.state.date, a.props), i = ht(a.state.date, a.props), p = mt(a.state.date, a.props), c = !a.props.showMonthYearPicker && !a.props.showQuarterYearPicker && !a.props.showYearPicker;
      return import_react2.default.createElement("div", { className: "react-datepicker__header react-datepicker__header--custom", onFocus: a.props.onDropdownFocus }, a.props.renderCustomHeader(de(de({}, a.state), {}, { customHeaderCount: n2, monthDate: r2, changeMonth: a.changeMonth, changeYear: a.changeYear, decreaseMonth: a.decreaseMonth, increaseMonth: a.increaseMonth, decreaseYear: a.decreaseYear, increaseYear: a.increaseYear, prevMonthButtonDisabled: o2, nextMonthButtonDisabled: s, prevYearButtonDisabled: i, nextYearButtonDisabled: p })), c && import_react2.default.createElement("div", { className: "react-datepicker__day-names" }, a.header(r2)));
    }), ye(ke(a), "renderYearHeader", function() {
      var t4 = a.state.date, r2 = a.props, n2 = r2.showYearPicker, o2 = kt(t4, r2.yearItemNumber), s = o2.startPeriod, i = o2.endPeriod;
      return import_react2.default.createElement("div", { className: "react-datepicker__header react-datepicker-year-header" }, n2 ? "".concat(s, " - ").concat(i) : getYear(t4));
    }), ye(ke(a), "renderHeader", function(e2) {
      switch (true) {
        case void 0 !== a.props.renderCustomHeader:
          return a.renderCustomHeader(e2);
        case (a.props.showMonthYearPicker || a.props.showQuarterYearPicker || a.props.showYearPicker):
          return a.renderYearHeader(e2);
        default:
          return a.renderDefaultHeader(e2);
      }
    }), ye(ke(a), "renderMonths", function() {
      var t4;
      if (!a.props.showTimeSelectOnly && !a.props.showYearPicker) {
        for (var r2 = [], n2 = a.props.showPreviousMonths ? a.props.monthsShown - 1 : 0, o2 = subMonths(a.state.date, n2), s = null !== (t4 = a.props.monthSelectedIn) && void 0 !== t4 ? t4 : n2, i = 0; i < a.props.monthsShown; ++i) {
          var p = addMonths(o2, i - s + n2), c = "month-".concat(i), d = i < a.props.monthsShown - 1, u = i > 0;
          r2.push(import_react2.default.createElement("div", { key: c, ref: function(e2) {
            a.monthContainer = e2;
          }, className: "react-datepicker__month-container" }, a.renderHeader({ monthDate: p, i }), import_react2.default.createElement(Bt, { chooseDayAriaLabelPrefix: a.props.chooseDayAriaLabelPrefix, disabledDayAriaLabelPrefix: a.props.disabledDayAriaLabelPrefix, weekAriaLabelPrefix: a.props.weekAriaLabelPrefix, ariaLabelPrefix: a.props.monthAriaLabelPrefix, onChange: a.changeMonthYear, day: p, dayClassName: a.props.dayClassName, calendarStartDay: a.props.calendarStartDay, monthClassName: a.props.monthClassName, onDayClick: a.handleDayClick, handleOnKeyDown: a.props.handleOnDayKeyDown, onDayMouseEnter: a.handleDayMouseEnter, onMouseLeave: a.handleMonthMouseLeave, onWeekSelect: a.props.onWeekSelect, orderInDisplay: i, formatWeekNumber: a.props.formatWeekNumber, locale: a.props.locale, minDate: a.props.minDate, maxDate: a.props.maxDate, excludeDates: a.props.excludeDates, excludeDateIntervals: a.props.excludeDateIntervals, highlightDates: a.props.highlightDates, holidays: a.props.holidays, selectingDate: a.state.selectingDate, includeDates: a.props.includeDates, includeDateIntervals: a.props.includeDateIntervals, inline: a.props.inline, shouldFocusDayInline: a.props.shouldFocusDayInline, fixedHeight: a.props.fixedHeight, filterDate: a.props.filterDate, preSelection: a.props.preSelection, setPreSelection: a.props.setPreSelection, selected: a.props.selected, selectsStart: a.props.selectsStart, selectsEnd: a.props.selectsEnd, selectsRange: a.props.selectsRange, selectsDisabledDaysInRange: a.props.selectsDisabledDaysInRange, showWeekNumbers: a.props.showWeekNumbers, startDate: a.props.startDate, endDate: a.props.endDate, peekNextMonth: a.props.peekNextMonth, setOpen: a.props.setOpen, shouldCloseOnSelect: a.props.shouldCloseOnSelect, renderDayContents: a.props.renderDayContents, renderMonthContent: a.props.renderMonthContent, renderQuarterContent: a.props.renderQuarterContent, renderYearContent: a.props.renderYearContent, disabledKeyboardNavigation: a.props.disabledKeyboardNavigation, showMonthYearPicker: a.props.showMonthYearPicker, showFullMonthYearPicker: a.props.showFullMonthYearPicker, showTwoColumnMonthYearPicker: a.props.showTwoColumnMonthYearPicker, showFourColumnMonthYearPicker: a.props.showFourColumnMonthYearPicker, showYearPicker: a.props.showYearPicker, showQuarterYearPicker: a.props.showQuarterYearPicker, isInputFocused: a.props.isInputFocused, containerRef: a.containerRef, monthShowsDuplicateDaysEnd: d, monthShowsDuplicateDaysStart: u })));
        }
        return r2;
      }
    }), ye(ke(a), "renderYears", function() {
      if (!a.props.showTimeSelectOnly)
        return a.props.showYearPicker ? import_react2.default.createElement("div", { className: "react-datepicker__year--container" }, a.renderHeader(), import_react2.default.createElement(Ht, ve({ onDayClick: a.handleDayClick, selectingDate: a.state.selectingDate, clearSelectingDate: a.clearSelectingDate, date: a.state.date }, a.props, { onYearMouseEnter: a.handleYearMouseEnter, onYearMouseLeave: a.handleYearMouseLeave }))) : void 0;
    }), ye(ke(a), "renderTimeSection", function() {
      if (a.props.showTimeSelect && (a.state.monthContainer || a.props.showTimeSelectOnly))
        return import_react2.default.createElement(Qt, { selected: a.props.selected, openToDate: a.props.openToDate, onChange: a.props.onTimeChange, timeClassName: a.props.timeClassName, format: a.props.timeFormat, includeTimes: a.props.includeTimes, intervals: a.props.timeIntervals, minTime: a.props.minTime, maxTime: a.props.maxTime, excludeTimes: a.props.excludeTimes, filterTime: a.props.filterTime, timeCaption: a.props.timeCaption, todayButton: a.props.todayButton, showMonthDropdown: a.props.showMonthDropdown, showMonthYearDropdown: a.props.showMonthYearDropdown, showYearDropdown: a.props.showYearDropdown, withPortal: a.props.withPortal, monthRef: a.state.monthContainer, injectTimes: a.props.injectTimes, locale: a.props.locale, handleOnKeyDown: a.props.handleOnKeyDown, showTimeSelectOnly: a.props.showTimeSelectOnly });
    }), ye(ke(a), "renderInputTimeSection", function() {
      var t4 = new Date(a.props.selected), r2 = Te(t4) && Boolean(a.props.selected) ? "".concat(wt(t4.getHours()), ":").concat(wt(t4.getMinutes())) : "";
      if (a.props.showTimeInput)
        return import_react2.default.createElement(jt, { date: t4, timeString: r2, timeInputLabel: a.props.timeInputLabel, onChange: a.props.onTimeChange, customTimeInput: a.props.customTimeInput });
    }), ye(ke(a), "renderAriaLiveRegion", function() {
      var t4, r2 = kt(a.state.date, a.props.yearItemNumber), n2 = r2.startPeriod, o2 = r2.endPeriod;
      return t4 = a.props.showYearPicker ? "".concat(n2, " - ").concat(o2) : a.props.showMonthYearPicker || a.props.showQuarterYearPicker ? getYear(a.state.date) : "".concat(Je(getMonth(a.state.date), a.props.locale), " ").concat(getYear(a.state.date)), import_react2.default.createElement("span", { role: "alert", "aria-live": "polite", className: "react-datepicker__aria-live" }, a.state.isRenderAriaLiveMessage && t4);
    }), ye(ke(a), "renderChildren", function() {
      if (a.props.children)
        return import_react2.default.createElement("div", { className: "react-datepicker__children-container" }, a.props.children);
    }), a.containerRef = import_react2.default.createRef(), a.state = { date: a.getDateInView(), selectingDate: null, monthContainer: null, isRenderAriaLiveMessage: false }, a;
  }
  return fe(o, [{ key: "componentDidMount", value: function() {
    var e2 = this;
    this.props.showTimeSelect && (this.assignMonthContainer = void e2.setState({ monthContainer: e2.monthContainer }));
  } }, { key: "componentDidUpdate", value: function(e2) {
    var t3 = this;
    if (!this.props.preSelection || We(this.props.preSelection, e2.preSelection) && this.props.monthSelectedIn === e2.monthSelectedIn)
      this.props.openToDate && !We(this.props.openToDate, e2.openToDate) && this.setState({ date: this.props.openToDate });
    else {
      var r2 = !He(this.state.date, this.props.preSelection);
      this.setState({ date: this.props.preSelection }, function() {
        return r2 && t3.handleCustomMonthChange(t3.state.date);
      });
    }
  } }, { key: "render", value: function() {
    var t3 = this.props.container || Wt;
    return import_react2.default.createElement("div", { ref: this.containerRef }, import_react2.default.createElement(t3, { className: (0, import_classnames.default)("react-datepicker", this.props.className, { "react-datepicker--time-only": this.props.showTimeSelectOnly }), showPopperArrow: this.props.showPopperArrow, arrowProps: this.props.arrowProps }, this.renderAriaLiveRegion(), this.renderPreviousButton(), this.renderNextButton(), this.renderMonths(), this.renderYears(), this.renderTodayButton(), this.renderTimeSection(), this.renderInputTimeSection(), this.renderChildren()));
  } }], [{ key: "defaultProps", get: function() {
    return { onDropdownFocus: function() {
    }, monthsShown: 1, forceShowMonthNavigation: false, timeCaption: "Time", previousYearButtonLabel: "Previous Year", nextYearButtonLabel: "Next Year", previousMonthButtonLabel: "Previous Month", nextMonthButtonLabel: "Next Month", customTimeInput: null, yearItemNumber: Ne };
  } }]), o;
}();
var Ut = function(t2) {
  De(n, import_react2.default.Component);
  var r2 = be(n);
  function n(e2) {
    var t3;
    return he(this, n), (t3 = r2.call(this, e2)).el = document.createElement("div"), t3;
  }
  return fe(n, [{ key: "componentDidMount", value: function() {
    this.portalRoot = (this.props.portalHost || document).getElementById(this.props.portalId), this.portalRoot || (this.portalRoot = document.createElement("div"), this.portalRoot.setAttribute("id", this.props.portalId), (this.props.portalHost || document.body).appendChild(this.portalRoot)), this.portalRoot.appendChild(this.el);
  } }, { key: "componentWillUnmount", value: function() {
    this.portalRoot.removeChild(this.el);
  } }, { key: "render", value: function() {
    return import_react_dom2.default.createPortal(this.props.children, this.el);
  } }]), n;
}();
var zt = function(e2) {
  return !e2.disabled && -1 !== e2.tabIndex;
};
var $t = function(t2) {
  De(n, import_react2.default.Component);
  var r2 = be(n);
  function n(t3) {
    var o;
    return he(this, n), ye(ke(o = r2.call(this, t3)), "getTabChildren", function() {
      return Array.prototype.slice.call(o.tabLoopRef.current.querySelectorAll("[tabindex], a, button, input, select, textarea"), 1, -1).filter(zt);
    }), ye(ke(o), "handleFocusStart", function() {
      var e2 = o.getTabChildren();
      e2 && e2.length > 1 && e2[e2.length - 1].focus();
    }), ye(ke(o), "handleFocusEnd", function() {
      var e2 = o.getTabChildren();
      e2 && e2.length > 1 && e2[0].focus();
    }), o.tabLoopRef = import_react2.default.createRef(), o;
  }
  return fe(n, [{ key: "render", value: function() {
    return this.props.enableTabLoop ? import_react2.default.createElement("div", { className: "react-datepicker__tab-loop", ref: this.tabLoopRef }, import_react2.default.createElement("div", { className: "react-datepicker__tab-loop__start", tabIndex: "0", onFocus: this.handleFocusStart }), this.props.children, import_react2.default.createElement("div", { className: "react-datepicker__tab-loop__end", tabIndex: "0", onFocus: this.handleFocusEnd })) : this.props.children;
  } }], [{ key: "defaultProps", get: function() {
    return { enableTabLoop: true };
  } }]), n;
}();
var Gt = function(t2) {
  De(o, import_react2.default.Component);
  var n = be(o);
  function o() {
    return he(this, o), n.apply(this, arguments);
  }
  return fe(o, [{ key: "render", value: function() {
    var t3, n2 = this.props, o2 = n2.className, a = n2.wrapperClassName, s = n2.hidePopper, i = n2.popperComponent, p = n2.popperModifiers, c = n2.popperPlacement, l = n2.popperProps, d = n2.targetComponent, u = n2.enableTabLoop, h = n2.popperOnKeyDown, m = n2.portalId, f = n2.portalHost;
    if (!s) {
      var y = (0, import_classnames.default)("react-datepicker-popper", o2);
      t3 = import_react2.default.createElement(Popper, ve({ modifiers: p, placement: c }, l), function(t4) {
        var r2 = t4.ref, n3 = t4.style, o3 = t4.placement, a2 = t4.arrowProps;
        return import_react2.default.createElement($t, { enableTabLoop: u }, import_react2.default.createElement("div", { ref: r2, style: n3, className: y, "data-placement": o3, onKeyDown: h }, import_react2.default.cloneElement(i, { arrowProps: a2 })));
      });
    }
    this.props.popperContainer && (t3 = import_react2.default.createElement(this.props.popperContainer, {}, t3)), m && !s && (t3 = import_react2.default.createElement(Ut, { portalId: m, portalHost: f }, t3));
    var v = (0, import_classnames.default)("react-datepicker-wrapper", a);
    return import_react2.default.createElement(Manager, { className: "react-datepicker-manager" }, import_react2.default.createElement(Reference, null, function(t4) {
      var r2 = t4.ref;
      return import_react2.default.createElement("div", { ref: r2, className: v }, d);
    }), t3);
  } }], [{ key: "defaultProps", get: function() {
    return { hidePopper: true, popperModifiers: [], popperProps: {}, popperPlacement: "bottom-start" };
  } }]), o;
}();
var Jt = "react-datepicker-ignore-onclickoutside";
var Xt = react_onclickoutside_es_default(qt);
var Zt = "Date input not valid.";
var er = function(t2) {
  De(s, import_react2.default.Component);
  var a = be(s);
  function s(t3) {
    var i;
    return he(this, s), ye(ke(i = a.call(this, t3)), "getPreSelection", function() {
      return i.props.openToDate ? i.props.openToDate : i.props.selectsEnd && i.props.startDate ? i.props.startDate : i.props.selectsStart && i.props.endDate ? i.props.endDate : Ye();
    }), ye(ke(i), "calcInitialState", function() {
      var e2, t4, r2 = null === (e2 = i.props.holidays) || void 0 === e2 ? void 0 : e2.reduce(function(e3, t5) {
        var r3 = new Date(t5.date);
        return isValid(r3) ? [].concat(Se(e3), [de(de({}, t5), {}, { date: r3 })]) : e3;
      }, []), n = i.getPreSelection(), a2 = ft(i.props), s2 = yt(i.props), p = a2 && isBefore(n, startOfDay(a2)) ? a2 : s2 && isAfter(n, endOfDay(s2)) ? s2 : n;
      return { open: i.props.startOpen || false, preventFocus: false, preSelection: null !== (t4 = i.props.selectsRange ? i.props.startDate : i.props.selected) && void 0 !== t4 ? t4 : p, highlightDates: vt(i.props.highlightDates), holidays: Dt(r2), focused: false, shouldFocusDayInline: false, isRenderAriaLiveMessage: false };
    }), ye(ke(i), "clearPreventFocusTimeout", function() {
      i.preventFocusTimeout && clearTimeout(i.preventFocusTimeout);
    }), ye(ke(i), "setFocus", function() {
      i.input && i.input.focus && i.input.focus({ preventScroll: true });
    }), ye(ke(i), "setBlur", function() {
      i.input && i.input.blur && i.input.blur(), i.cancelFocusInput();
    }), ye(ke(i), "setOpen", function(e2) {
      var t4 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      i.setState({ open: e2, preSelection: e2 && i.state.open ? i.state.preSelection : i.calcInitialState().preSelection, lastPreSelectChange: rr }, function() {
        e2 || i.setState(function(e3) {
          return { focused: !!t4 && e3.focused };
        }, function() {
          !t4 && i.setBlur(), i.setState({ inputValue: null });
        });
      });
    }), ye(ke(i), "inputOk", function() {
      return isDate(i.state.preSelection);
    }), ye(ke(i), "isCalendarOpen", function() {
      return void 0 === i.props.open ? i.state.open && !i.props.disabled && !i.props.readOnly : i.props.open;
    }), ye(ke(i), "handleFocus", function(e2) {
      i.state.preventFocus || (i.props.onFocus(e2), i.props.preventOpenOnFocus || i.props.readOnly || i.setOpen(true)), i.setState({ focused: true });
    }), ye(ke(i), "cancelFocusInput", function() {
      clearTimeout(i.inputFocusTimeout), i.inputFocusTimeout = null;
    }), ye(ke(i), "deferFocusInput", function() {
      i.cancelFocusInput(), i.inputFocusTimeout = setTimeout(function() {
        return i.setFocus();
      }, 1);
    }), ye(ke(i), "handleDropdownFocus", function() {
      i.cancelFocusInput();
    }), ye(ke(i), "handleBlur", function(e2) {
      (!i.state.open || i.props.withPortal || i.props.showTimeInput) && i.props.onBlur(e2), i.setState({ focused: false });
    }), ye(ke(i), "handleCalendarClickOutside", function(e2) {
      i.props.inline || i.setOpen(false), i.props.onClickOutside(e2), i.props.withPortal && e2.preventDefault();
    }), ye(ke(i), "handleChange", function() {
      for (var e2 = arguments.length, t4 = new Array(e2), r2 = 0; r2 < e2; r2++)
        t4[r2] = arguments[r2];
      var n = t4[0];
      if (!i.props.onChangeRaw || (i.props.onChangeRaw.apply(ke(i), t4), "function" == typeof n.isDefaultPrevented && !n.isDefaultPrevented())) {
        i.setState({ inputValue: n.target.value, lastPreSelectChange: tr });
        var o, a2, s2, p, c, l, d, u, h = (o = n.target.value, a2 = i.props.dateFormat, s2 = i.props.locale, p = i.props.strictParsing, c = i.props.minDate, l = null, d = Ge(s2) || Ge($e()), u = true, Array.isArray(a2) ? (a2.forEach(function(e3) {
          var t5 = parse(o, e3, /* @__PURE__ */ new Date(), { locale: d });
          p && (u = Te(t5, c) && o === Ie(t5, e3, s2)), Te(t5, c) && u && (l = t5);
        }), l) : (l = parse(o, a2, /* @__PURE__ */ new Date(), { locale: d }), p ? u = Te(l) && o === Ie(l, a2, s2) : Te(l) || (a2 = a2.match(xe).map(function(e3) {
          var t5 = e3[0];
          return "p" === t5 || "P" === t5 ? d ? (0, Pe[t5])(e3, d.formatLong) : t5 : e3;
        }).join(""), o.length > 0 && (l = parse(o, a2.slice(0, o.length), /* @__PURE__ */ new Date())), Te(l) || (l = new Date(o))), Te(l) && u ? l : null));
        i.props.showTimeSelectOnly && i.props.selected && !We(h, i.props.selected) && (h = set(i.props.selected, null == h ? { hours: getHours(i.props.selected), minutes: getMinutes(i.props.selected), seconds: getSeconds(i.props.selected) } : { hours: getHours(h), minutes: getMinutes(h), seconds: getSeconds(h) })), !h && n.target.value || i.setSelected(h, n, true);
      }
    }), ye(ke(i), "handleSelect", function(e2, t4, r2) {
      if (i.setState({ preventFocus: true }, function() {
        return i.preventFocusTimeout = setTimeout(function() {
          return i.setState({ preventFocus: false });
        }, 50), i.preventFocusTimeout;
      }), i.props.onChangeRaw && i.props.onChangeRaw(t4), i.setSelected(e2, t4, false, r2), i.props.showDateSelect && i.setState({ isRenderAriaLiveMessage: true }), !i.props.shouldCloseOnSelect || i.props.showTimeSelect)
        i.setPreSelection(e2);
      else if (!i.props.inline) {
        i.props.selectsRange || i.setOpen(false);
        var n = i.props, o = n.startDate, a2 = n.endDate;
        !o || a2 || isBefore(e2, o) || i.setOpen(false);
      }
    }), ye(ke(i), "setSelected", function(e2, t4, r2, n) {
      var o = e2;
      if (i.props.showYearPicker) {
        if (null !== o && at(getYear(o), i.props))
          return;
      } else if (i.props.showMonthYearPicker) {
        if (null !== o && tt(o, i.props))
          return;
      } else if (null !== o && Ze(o, i.props))
        return;
      var a2 = i.props, s2 = a2.onChange, p = a2.selectsRange, c = a2.startDate, l = a2.endDate;
      if (!Ve(i.props.selected, o) || i.props.allowSameDay || p)
        if (null !== o && (!i.props.selected || r2 && (i.props.showTimeSelect || i.props.showTimeSelectOnly || i.props.showTimeInput) || (o = Re(o, { hour: getHours(i.props.selected), minute: getMinutes(i.props.selected), second: getSeconds(i.props.selected) })), i.props.inline || i.setState({ preSelection: o }), i.props.focusSelectedMonth || i.setState({ monthSelectedIn: n })), p) {
          var d = c && !l, u = c && l;
          !c && !l ? s2([o, null], t4) : d && (isBefore(o, c) ? s2([o, null], t4) : s2([c, o], t4)), u && s2([o, null], t4);
        } else
          s2(o, t4);
      r2 || (i.props.onSelect(o, t4), i.setState({ inputValue: null }));
    }), ye(ke(i), "setPreSelection", function(e2) {
      var t4 = void 0 !== i.props.minDate, r2 = void 0 !== i.props.maxDate, n = true;
      if (e2) {
        var o = startOfDay(e2);
        if (t4 && r2)
          n = qe(e2, i.props.minDate, i.props.maxDate);
        else if (t4) {
          var a2 = startOfDay(i.props.minDate);
          n = isAfter(e2, a2) || Ve(o, a2);
        } else if (r2) {
          var s2 = endOfDay(i.props.maxDate);
          n = isBefore(e2, s2) || Ve(o, s2);
        }
      }
      n && i.setState({ preSelection: e2 });
    }), ye(ke(i), "handleTimeChange", function(e2) {
      var t4 = i.props.selected ? i.props.selected : i.getPreSelection(), r2 = i.props.selected ? e2 : Re(t4, { hour: getHours(e2), minute: getMinutes(e2) });
      i.setState({ preSelection: r2 }), i.props.onChange(r2), i.props.shouldCloseOnSelect && i.setOpen(false), i.props.showTimeInput && i.setOpen(true), (i.props.showTimeSelectOnly || i.props.showTimeSelect) && i.setState({ isRenderAriaLiveMessage: true }), i.setState({ inputValue: null });
    }), ye(ke(i), "onInputClick", function() {
      i.props.disabled || i.props.readOnly || i.setOpen(true), i.props.onInputClick();
    }), ye(ke(i), "onInputKeyDown", function(e2) {
      i.props.onKeyDown(e2);
      var t4 = e2.key;
      if (i.state.open || i.props.inline || i.props.preventOpenOnFocus) {
        if (i.state.open) {
          if ("ArrowDown" === t4 || "ArrowUp" === t4) {
            e2.preventDefault();
            var r2 = i.calendar.componentNode && i.calendar.componentNode.querySelector('.react-datepicker__day[tabindex="0"]');
            return void (r2 && r2.focus({ preventScroll: true }));
          }
          var n = Ye(i.state.preSelection);
          "Enter" === t4 ? (e2.preventDefault(), i.inputOk() && i.state.lastPreSelectChange === rr ? (i.handleSelect(n, e2), !i.props.shouldCloseOnSelect && i.setPreSelection(n)) : i.setOpen(false)) : "Escape" === t4 ? (e2.preventDefault(), i.setOpen(false)) : "Tab" === t4 && i.setOpen(false), i.inputOk() || i.props.onInputError({ code: 1, msg: Zt });
        }
      } else
        "ArrowDown" !== t4 && "ArrowUp" !== t4 && "Enter" !== t4 || i.onInputClick();
    }), ye(ke(i), "onPortalKeyDown", function(e2) {
      "Escape" === e2.key && (e2.preventDefault(), i.setState({ preventFocus: true }, function() {
        i.setOpen(false), setTimeout(function() {
          i.setFocus(), i.setState({ preventFocus: false });
        });
      }));
    }), ye(ke(i), "onDayKeyDown", function(e2) {
      i.props.onKeyDown(e2);
      var t4 = e2.key, r2 = Ye(i.state.preSelection);
      if ("Enter" === t4)
        e2.preventDefault(), i.handleSelect(r2, e2), !i.props.shouldCloseOnSelect && i.setPreSelection(r2);
      else if ("Escape" === t4)
        e2.preventDefault(), i.setOpen(false), i.inputOk() || i.props.onInputError({ code: 1, msg: Zt });
      else if (!i.props.disabledKeyboardNavigation) {
        var n;
        switch (t4) {
          case "ArrowLeft":
            n = subDays(r2, 1);
            break;
          case "ArrowRight":
            n = addDays(r2, 1);
            break;
          case "ArrowUp":
            n = subWeeks(r2, 1);
            break;
          case "ArrowDown":
            n = addWeeks(r2, 1);
            break;
          case "PageUp":
            n = subMonths(r2, 1);
            break;
          case "PageDown":
            n = addMonths(r2, 1);
            break;
          case "Home":
            n = subYears(r2, 1);
            break;
          case "End":
            n = addYears(r2, 1);
        }
        if (!n)
          return void (i.props.onInputError && i.props.onInputError({ code: 1, msg: Zt }));
        if (e2.preventDefault(), i.setState({ lastPreSelectChange: rr }), i.props.adjustDateOnChange && i.setSelected(n), i.setPreSelection(n), i.props.inline) {
          var o = getMonth(r2), a2 = getMonth(n), s2 = getYear(r2), d = getYear(n);
          o !== a2 || s2 !== d ? i.setState({ shouldFocusDayInline: true }) : i.setState({ shouldFocusDayInline: false });
        }
      }
    }), ye(ke(i), "onPopperKeyDown", function(e2) {
      "Escape" === e2.key && (e2.preventDefault(), i.setState({ preventFocus: true }, function() {
        i.setOpen(false), setTimeout(function() {
          i.setFocus(), i.setState({ preventFocus: false });
        });
      }));
    }), ye(ke(i), "onClearClick", function(e2) {
      e2 && e2.preventDefault && e2.preventDefault(), i.props.selectsRange ? i.props.onChange([null, null], e2) : i.props.onChange(null, e2), i.setState({ inputValue: null });
    }), ye(ke(i), "clear", function() {
      i.onClearClick();
    }), ye(ke(i), "onScroll", function(e2) {
      "boolean" == typeof i.props.closeOnScroll && i.props.closeOnScroll ? e2.target !== document && e2.target !== document.documentElement && e2.target !== document.body || i.setOpen(false) : "function" == typeof i.props.closeOnScroll && i.props.closeOnScroll(e2) && i.setOpen(false);
    }), ye(ke(i), "renderCalendar", function() {
      return i.props.inline || i.isCalendarOpen() ? import_react2.default.createElement(Xt, { ref: function(e2) {
        i.calendar = e2;
      }, locale: i.props.locale, calendarStartDay: i.props.calendarStartDay, chooseDayAriaLabelPrefix: i.props.chooseDayAriaLabelPrefix, disabledDayAriaLabelPrefix: i.props.disabledDayAriaLabelPrefix, weekAriaLabelPrefix: i.props.weekAriaLabelPrefix, monthAriaLabelPrefix: i.props.monthAriaLabelPrefix, adjustDateOnChange: i.props.adjustDateOnChange, setOpen: i.setOpen, shouldCloseOnSelect: i.props.shouldCloseOnSelect, dateFormat: i.props.dateFormatCalendar, useWeekdaysShort: i.props.useWeekdaysShort, formatWeekDay: i.props.formatWeekDay, dropdownMode: i.props.dropdownMode, selected: i.props.selected, preSelection: i.state.preSelection, onSelect: i.handleSelect, onWeekSelect: i.props.onWeekSelect, openToDate: i.props.openToDate, minDate: i.props.minDate, maxDate: i.props.maxDate, selectsStart: i.props.selectsStart, selectsEnd: i.props.selectsEnd, selectsRange: i.props.selectsRange, startDate: i.props.startDate, endDate: i.props.endDate, excludeDates: i.props.excludeDates, excludeDateIntervals: i.props.excludeDateIntervals, filterDate: i.props.filterDate, onClickOutside: i.handleCalendarClickOutside, formatWeekNumber: i.props.formatWeekNumber, highlightDates: i.state.highlightDates, holidays: i.state.holidays, includeDates: i.props.includeDates, includeDateIntervals: i.props.includeDateIntervals, includeTimes: i.props.includeTimes, injectTimes: i.props.injectTimes, inline: i.props.inline, shouldFocusDayInline: i.state.shouldFocusDayInline, peekNextMonth: i.props.peekNextMonth, showMonthDropdown: i.props.showMonthDropdown, showPreviousMonths: i.props.showPreviousMonths, useShortMonthInDropdown: i.props.useShortMonthInDropdown, showMonthYearDropdown: i.props.showMonthYearDropdown, showWeekNumbers: i.props.showWeekNumbers, showYearDropdown: i.props.showYearDropdown, withPortal: i.props.withPortal, forceShowMonthNavigation: i.props.forceShowMonthNavigation, showDisabledMonthNavigation: i.props.showDisabledMonthNavigation, scrollableYearDropdown: i.props.scrollableYearDropdown, scrollableMonthYearDropdown: i.props.scrollableMonthYearDropdown, todayButton: i.props.todayButton, weekLabel: i.props.weekLabel, outsideClickIgnoreClass: Jt, fixedHeight: i.props.fixedHeight, monthsShown: i.props.monthsShown, monthSelectedIn: i.state.monthSelectedIn, onDropdownFocus: i.handleDropdownFocus, onMonthChange: i.props.onMonthChange, onYearChange: i.props.onYearChange, dayClassName: i.props.dayClassName, weekDayClassName: i.props.weekDayClassName, monthClassName: i.props.monthClassName, timeClassName: i.props.timeClassName, showDateSelect: i.props.showDateSelect, showTimeSelect: i.props.showTimeSelect, showTimeSelectOnly: i.props.showTimeSelectOnly, onTimeChange: i.handleTimeChange, timeFormat: i.props.timeFormat, timeIntervals: i.props.timeIntervals, minTime: i.props.minTime, maxTime: i.props.maxTime, excludeTimes: i.props.excludeTimes, filterTime: i.props.filterTime, timeCaption: i.props.timeCaption, className: i.props.calendarClassName, container: i.props.calendarContainer, yearItemNumber: i.props.yearItemNumber, yearDropdownItemNumber: i.props.yearDropdownItemNumber, previousMonthAriaLabel: i.props.previousMonthAriaLabel, previousMonthButtonLabel: i.props.previousMonthButtonLabel, nextMonthAriaLabel: i.props.nextMonthAriaLabel, nextMonthButtonLabel: i.props.nextMonthButtonLabel, previousYearAriaLabel: i.props.previousYearAriaLabel, previousYearButtonLabel: i.props.previousYearButtonLabel, nextYearAriaLabel: i.props.nextYearAriaLabel, nextYearButtonLabel: i.props.nextYearButtonLabel, timeInputLabel: i.props.timeInputLabel, disabledKeyboardNavigation: i.props.disabledKeyboardNavigation, renderCustomHeader: i.props.renderCustomHeader, popperProps: i.props.popperProps, renderDayContents: i.props.renderDayContents, renderMonthContent: i.props.renderMonthContent, renderQuarterContent: i.props.renderQuarterContent, renderYearContent: i.props.renderYearContent, onDayMouseEnter: i.props.onDayMouseEnter, onMonthMouseLeave: i.props.onMonthMouseLeave, onYearMouseEnter: i.props.onYearMouseEnter, onYearMouseLeave: i.props.onYearMouseLeave, selectsDisabledDaysInRange: i.props.selectsDisabledDaysInRange, showTimeInput: i.props.showTimeInput, showMonthYearPicker: i.props.showMonthYearPicker, showFullMonthYearPicker: i.props.showFullMonthYearPicker, showTwoColumnMonthYearPicker: i.props.showTwoColumnMonthYearPicker, showFourColumnMonthYearPicker: i.props.showFourColumnMonthYearPicker, showYearPicker: i.props.showYearPicker, showQuarterYearPicker: i.props.showQuarterYearPicker, showPopperArrow: i.props.showPopperArrow, excludeScrollbar: i.props.excludeScrollbar, handleOnKeyDown: i.props.onKeyDown, handleOnDayKeyDown: i.onDayKeyDown, isInputFocused: i.state.focused, customTimeInput: i.props.customTimeInput, setPreSelection: i.setPreSelection }, i.props.children) : null;
    }), ye(ke(i), "renderAriaLiveRegion", function() {
      var t4, r2 = i.props, n = r2.dateFormat, o = r2.locale, a2 = i.props.showTimeInput || i.props.showTimeSelect ? "PPPPp" : "PPPP";
      return t4 = i.props.selectsRange ? "Selected start date: ".concat(Oe(i.props.startDate, { dateFormat: a2, locale: o }), ". ").concat(i.props.endDate ? "End date: " + Oe(i.props.endDate, { dateFormat: a2, locale: o }) : "") : i.props.showTimeSelectOnly ? "Selected time: ".concat(Oe(i.props.selected, { dateFormat: n, locale: o })) : i.props.showYearPicker ? "Selected year: ".concat(Oe(i.props.selected, { dateFormat: "yyyy", locale: o })) : i.props.showMonthYearPicker ? "Selected month: ".concat(Oe(i.props.selected, { dateFormat: "MMMM yyyy", locale: o })) : i.props.showQuarterYearPicker ? "Selected quarter: ".concat(Oe(i.props.selected, { dateFormat: "yyyy, QQQ", locale: o })) : "Selected date: ".concat(Oe(i.props.selected, { dateFormat: a2, locale: o })), import_react2.default.createElement("span", { role: "alert", "aria-live": "polite", className: "react-datepicker__aria-live" }, t4);
    }), ye(ke(i), "renderDateInput", function() {
      var t4, n = (0, import_classnames.default)(i.props.className, ye({}, Jt, i.state.open)), o = i.props.customInput || import_react2.default.createElement("input", { type: "text" }), a2 = i.props.customInputRef || "ref", s2 = "string" == typeof i.props.value ? i.props.value : "string" == typeof i.state.inputValue ? i.state.inputValue : i.props.selectsRange ? function(e2, t5, r2) {
        if (!e2)
          return "";
        var n2 = Oe(e2, r2), o2 = t5 ? Oe(t5, r2) : "";
        return "".concat(n2, " - ").concat(o2);
      }(i.props.startDate, i.props.endDate, i.props) : Oe(i.props.selected, i.props);
      return import_react2.default.cloneElement(o, (ye(t4 = {}, a2, function(e2) {
        i.input = e2;
      }), ye(t4, "value", s2), ye(t4, "onBlur", i.handleBlur), ye(t4, "onChange", i.handleChange), ye(t4, "onClick", i.onInputClick), ye(t4, "onFocus", i.handleFocus), ye(t4, "onKeyDown", i.onInputKeyDown), ye(t4, "id", i.props.id), ye(t4, "name", i.props.name), ye(t4, "form", i.props.form), ye(t4, "autoFocus", i.props.autoFocus), ye(t4, "placeholder", i.props.placeholderText), ye(t4, "disabled", i.props.disabled), ye(t4, "autoComplete", i.props.autoComplete), ye(t4, "className", (0, import_classnames.default)(o.props.className, n)), ye(t4, "title", i.props.title), ye(t4, "readOnly", i.props.readOnly), ye(t4, "required", i.props.required), ye(t4, "tabIndex", i.props.tabIndex), ye(t4, "aria-describedby", i.props.ariaDescribedBy), ye(t4, "aria-invalid", i.props.ariaInvalid), ye(t4, "aria-labelledby", i.props.ariaLabelledBy), ye(t4, "aria-required", i.props.ariaRequired), t4));
    }), ye(ke(i), "renderClearButton", function() {
      var t4 = i.props, r2 = t4.isClearable, n = t4.selected, o = t4.startDate, a2 = t4.endDate, s2 = t4.clearButtonTitle, p = t4.clearButtonClassName, c = void 0 === p ? "" : p, l = t4.ariaLabelClose, d = void 0 === l ? "Close" : l;
      return !r2 || null == n && null == o && null == a2 ? null : import_react2.default.createElement("button", { type: "button", className: "react-datepicker__close-icon ".concat(c).trim(), "aria-label": d, onClick: i.onClearClick, title: s2, tabIndex: -1 });
    }), i.state = i.calcInitialState(), i;
  }
  return fe(s, [{ key: "componentDidMount", value: function() {
    window.addEventListener("scroll", this.onScroll, true);
  } }, { key: "componentDidUpdate", value: function(e2, t3) {
    var r2, n;
    e2.inline && (r2 = e2.selected, n = this.props.selected, r2 && n ? getMonth(r2) !== getMonth(n) || getYear(r2) !== getYear(n) : r2 !== n) && this.setPreSelection(this.props.selected), void 0 !== this.state.monthSelectedIn && e2.monthsShown !== this.props.monthsShown && this.setState({ monthSelectedIn: 0 }), e2.highlightDates !== this.props.highlightDates && this.setState({ highlightDates: vt(this.props.highlightDates) }), t3.focused || Ve(e2.selected, this.props.selected) || this.setState({ inputValue: null }), t3.open !== this.state.open && (false === t3.open && true === this.state.open && this.props.onCalendarOpen(), true === t3.open && false === this.state.open && this.props.onCalendarClose());
  } }, { key: "componentWillUnmount", value: function() {
    this.clearPreventFocusTimeout(), window.removeEventListener("scroll", this.onScroll, true);
  } }, { key: "renderInputContainer", value: function() {
    var t3 = this.props.showIcon;
    return import_react2.default.createElement("div", { className: "react-datepicker__input-container".concat(t3 ? " react-datepicker__view-calendar-icon" : "") }, t3 && import_react2.default.createElement("svg", { className: "react-datepicker__calendar-icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, import_react2.default.createElement("path", { d: "M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" })), this.state.isRenderAriaLiveMessage && this.renderAriaLiveRegion(), this.renderDateInput(), this.renderClearButton());
  } }, { key: "render", value: function() {
    var t3 = this.renderCalendar();
    if (this.props.inline)
      return t3;
    if (this.props.withPortal) {
      var r2 = this.state.open ? import_react2.default.createElement($t, { enableTabLoop: this.props.enableTabLoop }, import_react2.default.createElement("div", { className: "react-datepicker__portal", tabIndex: -1, onKeyDown: this.onPortalKeyDown }, t3)) : null;
      return this.state.open && this.props.portalId && (r2 = import_react2.default.createElement(Ut, { portalId: this.props.portalId, portalHost: this.props.portalHost }, r2)), import_react2.default.createElement("div", null, this.renderInputContainer(), r2);
    }
    return import_react2.default.createElement(Gt, { className: this.props.popperClassName, wrapperClassName: this.props.wrapperClassName, hidePopper: !this.isCalendarOpen(), portalId: this.props.portalId, portalHost: this.props.portalHost, popperModifiers: this.props.popperModifiers, targetComponent: this.renderInputContainer(), popperContainer: this.props.popperContainer, popperComponent: t3, popperPlacement: this.props.popperPlacement, popperProps: this.props.popperProps, popperOnKeyDown: this.onPopperKeyDown, enableTabLoop: this.props.enableTabLoop });
  } }], [{ key: "defaultProps", get: function() {
    return { allowSameDay: false, dateFormat: "MM/dd/yyyy", dateFormatCalendar: "LLLL yyyy", onChange: function() {
    }, disabled: false, disabledKeyboardNavigation: false, dropdownMode: "scroll", onFocus: function() {
    }, onBlur: function() {
    }, onKeyDown: function() {
    }, onInputClick: function() {
    }, onSelect: function() {
    }, onClickOutside: function() {
    }, onMonthChange: function() {
    }, onCalendarOpen: function() {
    }, onCalendarClose: function() {
    }, preventOpenOnFocus: false, onYearChange: function() {
    }, onInputError: function() {
    }, monthsShown: 1, readOnly: false, withPortal: false, selectsDisabledDaysInRange: false, shouldCloseOnSelect: true, showTimeSelect: false, showTimeInput: false, showPreviousMonths: false, showMonthYearPicker: false, showFullMonthYearPicker: false, showTwoColumnMonthYearPicker: false, showFourColumnMonthYearPicker: false, showYearPicker: false, showQuarterYearPicker: false, strictParsing: false, timeIntervals: 30, timeCaption: "Time", previousMonthAriaLabel: "Previous Month", previousMonthButtonLabel: "Previous Month", nextMonthAriaLabel: "Next Month", nextMonthButtonLabel: "Next Month", previousYearAriaLabel: "Previous Year", previousYearButtonLabel: "Previous Year", nextYearAriaLabel: "Next Year", nextYearButtonLabel: "Next Year", timeInputLabel: "Time", enableTabLoop: true, yearItemNumber: Ne, focusSelectedMonth: false, showPopperArrow: true, excludeScrollbar: true, customTimeInput: null, calendarStartDay: void 0 };
  } }]), s;
}();
var tr = "input";
var rr = "navigate";
export {
  Wt as CalendarContainer,
  er as default,
  $e as getDefaultLocale,
  Ue as registerLocale,
  ze as setDefaultLocale
};
//# sourceMappingURL=react-datepicker.js.map
