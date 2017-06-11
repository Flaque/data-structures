'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _group = require('@vx/group');

var _hierarchy = require('@vx/hierarchy');

var _shape = require('@vx/shape');

var _d3Hierarchy = require('d3-hierarchy');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Flaque/Projects/data-structures/site/ui/tree.js';


function Node(_ref) {
  var node = _ref.node,
      events = _ref.events;

  var width = 40;
  var height = 20;
  var cornerRadius = 5;
  var color = "#2980b9";
  var textColor = "white";

  return _react2.default.createElement(_group.Group, { top: node.x, left: node.y, __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement('rect', {
    height: height,
    width: width,
    y: -height / 2,
    x: -width / 2,
    fill: color,
    stroke: color,
    strokeWidth: 1,
    rx: cornerRadius,
    ry: cornerRadius,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), _react2.default.createElement('text', {
    dy: ".33em",
    fontSize: 9,
    fontFamily: "Helvetica",
    textAnchor: "middle",
    style: { pointerEvents: "none" },
    fill: textColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, node.data.name));
}

function Link(_ref2) {
  var link = _ref2.link;

  var color = "black";
  return _react2.default.createElement(_shape.LinkHorizontal, {
    data: link,
    stroke: color,
    strokeWidth: '1',
    fill: 'none',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  });
}

var TreeGraph = function (_React$Component) {
  (0, _inherits3.default)(TreeGraph, _React$Component);

  function TreeGraph(props) {
    (0, _classCallCheck3.default)(this, TreeGraph);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TreeGraph.__proto__ || (0, _getPrototypeOf2.default)(TreeGraph)).call(this, props));

    var data = (0, _d3Hierarchy.hierarchy)(props.data);
    _this.state = {
      data: data
    };

    _this.margin = props.margin;
    _this.size = [props.height - _this.margin.top - _this.margin.bottom, props.width - _this.margin.left - _this.margin.right];
    return _this;
  }

  (0, _createClass3.default)(TreeGraph, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('svg', { width: this.props.width, height: this.props.height, __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement(_hierarchy.Tree, {
        top: this.margin.top,
        left: this.margin.left,
        root: this.state.data,
        size: this.size,
        nodeComponent: Node,
        linkComponent: Link,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }));
    }
  }]);

  return TreeGraph;
}(_react2.default.Component);

exports.default = TreeGraph;