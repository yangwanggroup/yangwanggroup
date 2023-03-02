exports.ids = [3];
exports.modules = {

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(113);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("dd24cd4e", content, true, context)
};

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f4d78618_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(101);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f4d78618_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f4d78618_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f4d78618_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f4d78618_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "h4[data-v-f4d78618]{margin:20px 0 10px}p[data-v-f4d78618]{color:#606266;line-height:1.7}.group-wrapper[data-v-f4d78618]{align-items:center;display:flex;height:400px;justify-content:center;margin:10px auto;overflow:hidden;position:relative;width:100%}.group-bg[data-v-f4d78618]{filter:blur(20px);height:100%;position:absolute;transform:scale(1.1);width:100%}.group-ph[data-v-f4d78618]{height:400px;width:800px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=f4d78618&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('el-container', {
    attrs: {
      "direction": "vertical"
    }
  }, [_c('myheader', {
    attrs: {
      "index": "/"
    }
  }), _vm._v(" "), _c('el-main', {
    staticClass: "main-content"
  }, [_c('el-row', {
    attrs: {
      "gutter": 0,
      "type": "flex",
      "justify": "center"
    }
  }, [_c('el-col', {
    attrs: {
      "xs": 20,
      "sm": 18,
      "md": 16,
      "lg": 14,
      "xl": 14
    }
  }, [_c('div', {
    staticClass: "group-wrapper animated bounceInDown"
  }, [_c('el-image', {
    staticClass: "group-bg",
    attrs: {
      "fit": "fill",
      "src": "/group2.jpg"
    }
  }), _vm._v(" "), _c('el-image', {
    staticClass: "group-ph",
    attrs: {
      "src": "/group2.jpg"
    }
  })], 1), _vm._v(" "), _c('el-divider'), _vm._v(" "), _c('h1', [_vm._v("Cloud Computing and Storage Laboratory of Shenzhen Advanced Institute")]), _vm._v(" "), _c('p', {
    staticStyle: {
      "text-indent": "2em"
    }
  }, [_vm._v("\n          Cloud Computing and Storage Laboratory of Shenzhen Advanced Institute (SIAT-CCSLab) is affiliated to the Cloud Computing Center of the Digital Institute of Shenzhen Institute of Advanced Technology, Chinese Academy of Sciences, and is committed to cutting-edge technologies including cloud computing, virtualization, big data analysis and processing, storage and other fields, and has accumulated rich technical achievements and experimental data. CCSLab is led by researcher Wang Yang, with 1 postdoctoral fellow, 2 doctors, several masters of the university, and a number of internship students from universities such as the University of Science and Technology of China.\n          Graduates go to the University of Rochester and well-known domestic Internet companies such as Ali, Tencent, Huawei, and Baidu.\n        ")]), _vm._v(" "), _c('el-divider', [_c('i', {
    staticClass: "el-icon-lock"
  })]), _vm._v(" "), _c('h1', [_vm._v("Research directions")]), _vm._v(" "), _c('ul', [_c('li', [_c('h4', [_vm._v("Security and acceleration technologies for system virtualization in cloud environments")]), _vm._v(" "), _c('p', [_vm._v("\n              Engineering practice of hybrid consensus scheme, new consensus protocol, performance improvement of consensus protocol, etc. \n              The hybrid consensus scheme is mainly based on the latest achievements of academia to propose innovations and improvements. The engineering practices of the new consensus protocol include consensus protocols based on randomization algorithms and consensus protocols based on DAG patterns. The performance improvement of consensus protocol refers to the parallel processing of traditional consensus protocol, while maintaining the correctness and activity of the protocol, and efficiently using the performance of multi-core machines, so that the performance of the traditional BFT protocol is improved and applied to other consensus protocols.\n            ")])]), _vm._v(" "), _c('li', [_c('h4', [_vm._v("Edge-cloud collaboration technologies and methods for machine learning")]), _vm._v(" "), _c('p', [_vm._v("\n              The research mainly focuses on the design and application of privacy protection, setup zero knowledge proof, and fully homomorphic encryption algorithms under the account model. The privacy protection under the account model needs to meet the requirements at the same time: the relevant parties and authorized members can see the clear text of the information; Unrelated parties can only see meaningless encrypted information from the ledger; The consensus node can directly judge the legitimacy of the transaction on the encrypted information and perform corresponding operations on the account. \n              Setup-free zero-knowledge proofs are an improvement over the existing zk-SNARK scheme where setup is required. Fully homomorphic encryption refers to any operation on ciphertext that is originally feasible in plaintext without decryption, which is an improvement of the homomorphic encryption algorithm.\n            ")])]), _vm._v(" "), _c('li', [_c('h4', [_vm._v("Blockchain technology")]), _vm._v(" "), _c('p', [_vm._v("\n              Research on new blockchain architectures based on trusted hardware. \n              The basic idea is to provide a general, high-performance solution based on trusted hardware to solve problems such as confidentiality protection and computational complexity.\n            ")])]), _vm._v(" "), _c('li', [_c('h4', [_vm._v("Big data framework optimization method based on new storage and network technology ")]), _vm._v(" "), _c('p', [_vm._v("\n              Including cross-chain data retrieval and cross-chain asset exchange. \n              Cross-chain data retrieval can provide regulators with stronger supervision capabilities under multi-chain conditions; \n              Cross-chain asset exchange is a decentralized trust atomic swap.\n            ")])])]), _vm._v(" "), _c('h1', [_vm._v("Representative projects")]), _vm._v(" "), _c('ul', [_c('li', [_c('h4', [_vm._v("Human-machine-object integration cloud computing architecture and platform data-driven application adaptation and self-evolution technology（National Key R&D Program \"Cloud Computing Big Data\" Special Project, 2018--2021）")]), _vm._v(" "), _c('p', [_vm._v("\n              This project solves the three major problems and challenges of multi-dimensional programmability of cloud-network resources, dynamic discovery of cloud-network resources, and trusted collaboration of cloud-network resources, and is the bottleneck of human-machine-object integration as a new generation of information technology. This project proposes a software-defined method for human-machine-object integration, presents a set of software-defined infrastructure for human-machine-object integration, and establishes the basic theory, method and related technical system and specifications of software-defined for human-machine-object integration.\n          Main research content: \n\n          （1）Based on the software-defined method, a cloud-network resource collaborative management architecture and performance optimization method for application adaptation are constructed.\n\n          （2）Sense and collect resource usage data from specific scenario applications; With the help of fusion and analysis methods, establish dynamic characteristics and prediction mechanisms of application resource usage.\n\n          （3）According to the dynamic operating environment and variable user requirements in specific scenarios, a distributed directory service is built to realize the tracking and management of mobile devices, and the computing technology based on the collaborative execution of cloud, network and end is completed by means of task migration and offloading.\n            ")])]), _vm._v(" "), _c('li', [_c('h4', [_vm._v("Research on key technologies and platforms for intelligent driving driven by intelligence（Macao Key R&D Special Program , 2017-01--2020-12）")]), _vm._v(" "), _c('p', [_vm._v("\n              At present, the core functional requirements of multi-vehicle intelligent collaboration include: interconnection of any vehicle, any time and any place; Full-time and spatial dynamic traffic information collection and fusion; Effective coordination of people and roads - collaborative safety (divided into active safety and passive safety), collaborative control (divided into active control and passive control).\n              Research content:\n\n              （1）Driving scene recognition technology that integrates radar perception and visual perception\n\n              （2）Scenario knowledge base construction technology based on knowledge graph and event graph\n\n              （3）Driving rule generation and evolution technology based on reinforcement learning\n\n              （4）Multi-vehicle collaboration technology based on cognitive architecture, including multi-vehicle formation motion planning, multi-vehicle collision avoidance, and multi-vehicle competition consensus\n            ")])]), _vm._v(" "), _c('li', [_c('h4', [_vm._v("Security control and trusted enhanced management system based on large-scale dynamic infrastructure（Research and development in key areas of Guangdong Province , 2018--2021）")]), _vm._v(" "), _c('p', [_vm._v("\n              This project focuses on the key technologies of network security boundary control:\n\n            （1）Research on the intelligent gateway technology based on security detection, automatically detect security problems through the system, and then implement the corresponding security isolation strategy based on the intelligent gateway\n\n            （2）The active security management technology based on concurrent migration of virtual machines is studied, and the strategy of concurrent migration of multiple virtual machines in the case of security problems is designed to improve the overall security and reliability of the system.\n            ")])]), _vm._v(" "), _c('li', [_c('h4', [_vm._v("Research on data and service migration of mobile cloud computing in spatiotemporal big data environment（National nature on the project , 2017--2020）")]), _vm._v(" "), _c('p', [_vm._v("\n              Data and service migration is an effective way to reduce latency and network load and improve the quality of mobile cloud services. Faced with the diversification, real-time, and huge number of user access modes of cloud services in the big data environment, the current migration strategies and methods face serious challenges.\n\n              Objective: To propose an optimization method for data and service migration based on access spatiotemporal estimation, so that the deployment of shared data and services can match and adapt to the access patterns of mobile users, and complete the requested services in the least cost.\n            ")])])]), _vm._v(" "), _c('h1', [_vm._v("Representative papers")]), _vm._v(" "), _c('ul', [_c('li', [_c('h4', [_vm._v("Cost-Driven Data Caching in the Cloud: An Analytic Approach, IEEE International Conference on Computer Communications")])]), _vm._v(" "), _c('li', [_c('h4', [_vm._v("Sova: A Software-Defined Autonomic Framework for Virtual Network Allocations")])]), _vm._v(" "), _c('li', [_c('h4', [_vm._v("Deadlock Avoidance Algorithms for Recursion-Tree Modeled Requests in Parallel Executions.")])]), _vm._v(" "), _c('li', [_c('h4', [_vm._v("Algorithmics of Cost-Driven Computation Offloading in the Edge-Cloud Environment")])])])], 1)], 1)], 1), _vm._v(" "), _c('myfooter')], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=f4d78618&scoped=true&

// EXTERNAL MODULE: ./components/myheader.vue + 4 modules
var myheader = __webpack_require__(94);

// EXTERNAL MODULE: ./components/myfooter.vue + 4 modules
var myfooter = __webpack_require__(95);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&


/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    myheader: myheader["a" /* default */],
    myfooter: myfooter["a" /* default */]
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(7);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(112)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f4d78618",
  "5f571ade"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(89);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("3b6abea2", content, true, context)
};

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(91);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("2454a982", content, true, context)
};

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(93);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("4c5983f4", content, true, context)
};

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_navi_css_vue_type_style_index_0_id_6c05e904_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_navi_css_vue_type_style_index_0_id_6c05e904_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_navi_css_vue_type_style_index_0_id_6c05e904_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_navi_css_vue_type_style_index_0_id_6c05e904_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_navi_css_vue_type_style_index_0_id_6c05e904_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".navi[data-v-6c05e904]{-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;text-size-adjust:100%;height:70px;left:0;min-width:1024px;position:relative;position:sticky;top:0;width:100%;z-index:9997}.navi[data-v-6c05e904],.navi *[data-v-6c05e904],.navi[data-v-6c05e904] :after,.navi[data-v-6c05e904] :before,.navi[data-v-6c05e904]:after,.navi[data-v-6c05e904]:before{box-sizing:content-box;letter-spacing:normal;margin:0;padding:0;pointer-events:auto}.navi-wrapper[data-v-6c05e904]{height:auto;min-height:100%}.navi-background[data-v-6c05e904],.navi-wrapper[data-v-6c05e904]{left:0;position:absolute;top:0;width:100%;z-index:1}.navi-background[data-v-6c05e904]{height:100%;transition:background-color .5s cubic-bezier(.28,.11,.32,1)}.navi-background[data-v-6c05e904]:after{background-color:hsla(0,0%,100%,.4);background-color:rgba(29,29,31,.2)}@supports ((-webkit-backdrop-filter:initial) or (backdrop-filter:initial)){.navi-background[data-v-6c05e904]{-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px);background-color:hsla(0,0%,100%,.7)}}.navi-background[data-v-6c05e904]{-webkit-backdrop-filter:initial;backdrop-filter:none;background-color:hsla(0,0%,100%,.9)}.navi.navi-outside-wrapper .navi-background[data-v-6c05e904]{background-color:hsla(0,0%,100%,.9);transition:background-color .5s cubic-bezier(.28,.11,.32,1);transition-property:background-color,-webkit-backdrop-filter;transition-property:background-color,backdrop-filter;transition-property:background-color,backdrop-filter,-webkit-backdrop-filter}.navi.navi-outside-wrapper .navi-background[data-v-6c05e904]:after{background-color:rgba(29,29,31,.1)}@supports ((-webkit-backdrop-filter:initial) or (backdrop-filter:initial)){.navi.navi-outside-wrapper .navi-background[data-v-6c05e904]{-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px);background-color:hsla(0,0%,100%,.7)}}.navi-outside-wrapper .navi-background[data-v-6c05e904]{-webkit-backdrop-filter:initial;backdrop-filter:none;background-color:hsla(0,0%,100%,.9)}.navi-background[data-v-6c05e904]:after{content:\"\";display:block;height:1px;left:50%;margin-left:-490px;position:absolute;top:100%;width:980px;z-index:1}.navi-background[data-v-6c05e904]:after,.navi-outside-wrapper .navi-background[data-v-6c05e904]:after{left:0;margin-left:0;width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_myheader_vue_vue_type_style_index_1_id_6c05e904_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_myheader_vue_vue_type_style_index_1_id_6c05e904_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_myheader_vue_vue_type_style_index_1_id_6c05e904_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_myheader_vue_vue_type_style_index_1_id_6c05e904_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_myheader_vue_vue_type_style_index_1_id_6c05e904_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".el-col[data-v-6c05e904],.el-row[data-v-6c05e904]{height:100%}.el-col[data-v-6c05e904]{display:flex;justify-content:center}.content[data-v-6c05e904]{font-weight:500;height:100%;width:100%}.logo[data-v-6c05e904]{align-items:center;color:purple;display:inline-flex;font-family:\"Times New Roman\",serif;font-size:6rem;height:100%;justify-content:center;min-width:100px;overflow:hidden}.title-item[data-v-6c05e904]{display:table;height:100%;text-align:center;width:40%}.title-item-link[data-v-6c05e904]{color:#303133;display:table-cell;letter-spacing:0;line-height:1.3;text-align:center;-webkit-text-decoration:none;text-decoration:none;vertical-align:middle}.c-title[data-v-6c05e904]{font-size:1.8rem;margin-bottom:10px}.c-title[data-v-6c05e904],.e-title[data-v-6c05e904]{white-space:nowrap}.e-title[data-v-6c05e904]{color:#909399;font-size:1rem;font-weight:700;letter-spacing:1px;text-transform:uppercase}.mousein[data-v-6c05e904],.selected[data-v-6c05e904]{border-bottom:1px solid purple}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_myfooter_vue_vue_type_style_index_0_id_6ac67a4a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_myfooter_vue_vue_type_style_index_0_id_6ac67a4a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_myfooter_vue_vue_type_style_index_0_id_6ac67a4a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_myfooter_vue_vue_type_style_index_0_id_6ac67a4a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_myfooter_vue_vue_type_style_index_0_id_6ac67a4a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".footer[data-v-6ac67a4a]{align-items:center;background-color:#fff;display:flex;font-size:1.2rem;justify-content:center}.content[data-v-6ac67a4a]{text-align:center}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/myheader.vue?vue&type=template&id=6c05e904&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('el-container', {
    staticClass: "navi navi-outside-wrapper"
  }, [_c('div', {
    staticClass: "navi-wrapper"
  }, [_c('div', {
    staticClass: "navi-background"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('el-row', {
    attrs: {
      "gutter": 2,
      "type": "flex",
      "justify": "center"
    }
  }, [_c('el-col', {
    attrs: {
      "xs": 11,
      "sm": 10,
      "md": 9,
      "lg": 8,
      "xl": 7
    }
  }, _vm._l(_vm.titles1, function (item) {
    return _c('div', {
      staticClass: "title-item",
      class: {
        'selected': _vm.index === item.key,
        'mousein': _vm.mouseindex === item.key
      },
      on: {
        "mouseenter": function ($event) {
          return _vm.mouseenter(item.key);
        },
        "mouseleave": function ($event) {
          return _vm.mouseleave();
        }
      }
    }, [_c('nuxt-link', {
      staticClass: "title-item-link",
      attrs: {
        "to": item.key
      }
    }, [_c('p', {
      staticClass: "c-title"
    }, [_vm._v(_vm._s(item.name_cn))]), _vm._v(" "), _c('p', {
      staticClass: "e-title"
    }, [_vm._v(_vm._s(item.name_en))])])], 1);
  }), 0), _vm._v(" "), _c('el-col', {
    staticClass: "hidden-xs-only",
    attrs: {
      "span": 1
    }
  }, [_c('div', {
    staticClass: "group-wrapper"
  }, [_c('el-image', {
    staticClass: "group-bg",
    attrs: {
      "src": "/CCSLAB.png"
    }
  })], 1)]), _vm._v(" "), _c('el-col', {
    attrs: {
      "xs": 11,
      "sm": 10,
      "md": 9,
      "lg": 8,
      "xl": 7
    }
  }, _vm._l(_vm.titles2, function (item) {
    return _c('div', {
      staticClass: "title-item",
      class: {
        'selected': _vm.index === item.key,
        'mousein': _vm.mouseindex === item.key
      },
      on: {
        "mouseenter": function ($event) {
          return _vm.mouseenter(item.key);
        },
        "mouseleave": function ($event) {
          return _vm.mouseleave();
        }
      }
    }, [_c('nuxt-link', {
      staticClass: "title-item-link",
      attrs: {
        "to": item.key
      }
    }, [_c('p', {
      staticClass: "c-title"
    }, [_vm._v(_vm._s(item.name_cn))]), _vm._v(" "), _c('p', {
      staticClass: "e-title"
    }, [_vm._v(_vm._s(item.name_en))])])], 1);
  }), 0)], 1)], 1)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/myheader.vue?vue&type=template&id=6c05e904&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/myheader.vue?vue&type=script&lang=js&
/* harmony default export */ var myheadervue_type_script_lang_js_ = ({
  name: 'myheader',
  props: {
    index: {
      type: String,
      default: 'INTRODUCTION'
    }
  },
  data() {
    return {
      titles1: [{
        key: '/',
        name_cn: 'INTRODUCTION'
      }, {
        key: '/achievements',
        name_cn: 'ACHIEVEMENTS'
      }],
      titles2: [{
        key: '/members',
        name_cn: 'MEMBERS'
      }, {
        key: '/join',
        name_cn: 'JOIN US'
      }, {
        key: '/events',
        name_cn: 'EVENTS'
      }],
      mouseindex: ''
    };
  },
  methods: {
    mouseenter(index) {
      this.mouseindex = index;
    },
    mouseleave() {
      this.mouseindex = null;
    }
  }
});
// CONCATENATED MODULE: ./components/myheader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_myheadervue_type_script_lang_js_ = (myheadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(7);

// CONCATENATED MODULE: ./components/myheader.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(88)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(90)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_myheadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6c05e904",
  "b73d223a"
  
)

/* harmony default export */ var myheader = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/myfooter.vue?vue&type=template&id=6ac67a4a&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('el-footer', {
    staticClass: "footer"
  });
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/myfooter.vue?vue&type=template&id=6ac67a4a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/myfooter.vue?vue&type=script&lang=js&
/* harmony default export */ var myfootervue_type_script_lang_js_ = ({
  name: "myfooter"
});
// CONCATENATED MODULE: ./components/myfooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_myfootervue_type_script_lang_js_ = (myfootervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(7);

// CONCATENATED MODULE: ./components/myfooter.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(92)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_myfootervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6ac67a4a",
  "f9a1ea1e"
  
)

/* harmony default export */ var myfooter = __webpack_exports__["a"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map