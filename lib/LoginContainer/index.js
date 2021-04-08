"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Paper2 = _interopRequireDefault(require("@material-ui/core/esm/Paper"));

var _Container2 = _interopRequireDefault(require("@material-ui/core/esm/Container"));

var _Warning2 = _interopRequireDefault(require("@material-ui/icons/esm/Warning"));

var _Button2 = _interopRequireDefault(require("@material-ui/core/esm/Button"));

var _FormGroup2 = _interopRequireDefault(require("@material-ui/core/esm/FormGroup"));

var _Input2 = _interopRequireDefault(require("@material-ui/core/esm/Input"));

var _IconButton2 = _interopRequireDefault(require("@material-ui/core/esm/IconButton"));

var _Refresh2 = _interopRequireDefault(require("@material-ui/icons/esm/Refresh"));

var _LockRounded2 = _interopRequireDefault(require("@material-ui/icons/esm/LockRounded"));

var _TextField2 = _interopRequireDefault(require("@material-ui/core/esm/TextField"));

var _Grid2 = _interopRequireDefault(require("@material-ui/core/esm/Grid"));

var _AccountCircle2 = _interopRequireDefault(require("@material-ui/icons/esm/AccountCircle"));

var _Typography2 = _interopRequireDefault(require("@material-ui/core/esm/Typography"));

var React = _interopRequireWildcard(require("react"));

var PropTypes = _interopRequireWildcard(require("prop-types"));

var _indexModule = _interopRequireDefault(require("./index.module.scss"));

var _core = require("@material-ui/core");

var _makeStyles = _interopRequireDefault(require("@material-ui/core/styles/makeStyles"));

var _clsx = _interopRequireDefault(require("clsx"));

var _icons = require("@material-ui/icons");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _makeStyles.default)(function (theme) {
  return {
    margin: {
      margin: theme.spacing(1)
    },
    logo: {
      margin: '0 auto',
      '&:before': {
        // IE11 doesn't handle well content property on an element, only on "before"/"after"
        content: theme.logo
      }
    }
  };
});

const LoginContainer = function ({
  onLogin
}) {
  const [captchaImg, setCaptchaImg] = (0, React.useState)();
  const [username, setUsername] = (0, React.useState)('');
  const [password, setPassword] = (0, React.useState)('');
  const [captchaText, setCaptchaText] = (0, React.useState)('');
  const [error, setError] = (0, React.useState)('');
  const styles = useStyles();
  return /*#__PURE__*/React.createElement(_Container2.default, {
    fixed: true,
    maxWidth: "xs",
    classes: {
      root: _indexModule.default.root
    },
    component: _Paper2.default
  }, /*#__PURE__*/React.createElement("form", {
    className: _indexModule.default.form
  }, /*#__PURE__*/React.createElement("div", {
    role: "img",
    "aria-label": "MASS Logo",
    className: styles.logo
  }), /*#__PURE__*/React.createElement(_Typography2.default, {
    variant: 'h4'
  }, 'Sign In'), /*#__PURE__*/React.createElement(_Grid2.default, {
    container: true,
    spacing: 1,
    alignItems: "flex-end",
    className: styles.margin
  }, /*#__PURE__*/React.createElement(_Grid2.default, {
    item: true
  }, /*#__PURE__*/React.createElement(_AccountCircle2.default, null)), /*#__PURE__*/React.createElement(_Grid2.default, {
    item: true
  }, /*#__PURE__*/React.createElement(_TextField2.default, {
    required: true,
    label: "User Name",
    onChange: function (e) {
      setUsername(e.currentTarget.value);
    }
  }))), /*#__PURE__*/React.createElement(_Grid2.default, {
    container: true,
    spacing: 1,
    alignItems: "flex-end",
    className: styles.margin
  }, /*#__PURE__*/React.createElement(_Grid2.default, {
    item: true
  }, /*#__PURE__*/React.createElement(_LockRounded2.default, null)), /*#__PURE__*/React.createElement(_Grid2.default, {
    item: true
  }, /*#__PURE__*/React.createElement(_TextField2.default, {
    required: true,
    label: "Password",
    type: "password",
    onChange: function (e) {
      setPassword(e.currentTarget.value);
    }
  }))), captchaImg && /*#__PURE__*/React.createElement(_FormGroup2.default, {
    className: (0, _clsx.default)(styles.margin, _indexModule.default.captchaContainer),
    row: true
  }, /*#__PURE__*/React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: captchaImg
    }
  }), /*#__PURE__*/React.createElement(_IconButton2.default, {
    "aria-label": "refresh captcha",
    component: "span"
  }, /*#__PURE__*/React.createElement(_Refresh2.default, {
    color: "secondary"
  })), /*#__PURE__*/React.createElement(_Input2.default, {
    classes: {
      root: _indexModule.default.captchaRoot
    },
    placeholder: "Enter the letters as seen in the CAPTCHA.",
    required: true,
    onChange: function (e) {
      setCaptchaText(e.currentTarget.value);
    }
  })), /*#__PURE__*/React.createElement(_Button2.default, {
    className: styles.margin,
    variant: "contained",
    color: "primary",
    type: "submit"
  }, "Login"), error !== '' && /*#__PURE__*/React.createElement("div", {
    className: _indexModule.default.error
  }, /*#__PURE__*/React.createElement(_Warning2.default, {
    color: "error"
  }), /*#__PURE__*/React.createElement(_Typography2.default, {
    variant: "subtitle1",
    color: "error"
  }, error))));
};

LoginContainer.propTypes = {
  onLogin: PropTypes.func.isRequired
};
var _default = LoginContainer;
exports.default = _default;