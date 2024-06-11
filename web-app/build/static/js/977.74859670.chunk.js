"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[977],{4977:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var s=n(5043),a=n(9923),o=n(9456),i=n(3216),l=n(2961),r=n(6483),c=n(4014),d=n(3097),u=n.n(d),m=n(788),p=n(3758),x=n(649),f=n(1938),g=n(579);const h=()=>{const e=(0,l.jL)(),t=(0,o.d4)((e=>e.tenants.tenantInfo)),n=(0,o.d4)((e=>e.addPool.storageClasses)),i=(0,o.d4)((e=>e.addPool.setup.numberOfNodes.toString())),d=(0,o.d4)((e=>e.addPool.setup.storageClass)),h=(0,o.d4)((e=>e.addPool.setup.volumeSize.toString())),v=(0,o.d4)((e=>e.addPool.setup.volumesPerServer.toString())),[y,j]=(0,s.useState)({}),C=1073741824*parseInt(h)*parseInt(v),b=C*parseInt(i);(0,s.useEffect)((()=>{let t=[{fieldKey:"number_of_nodes",required:!0,value:i.toString(),customValidation:parseInt(i)<1||isNaN(parseInt(i)),customValidationMessage:"Number of servers must be at least 1"},{fieldKey:"pool_size",required:!0,value:h.toString(),customValidation:parseInt(h)<1||isNaN(parseInt(h)),customValidationMessage:"Pool Size cannot be 0"},{fieldKey:"volumes_per_server",required:!0,value:v.toString(),customValidation:parseInt(v)<1||isNaN(parseInt(v)),customValidationMessage:"1 volume or more are required"}];const n=(0,m.D)(t);e((0,c.ck)({page:"setup",status:0===Object.keys(n).length})),j(n)}),[e,i,h,v,d]),(0,s.useEffect)((()=>{0===n.length&&t&&x.A.invoke("GET","/api/v1/namespaces/".concat(t.namespace,"/resourcequotas/").concat(t.namespace,"-storagequota")).then((t=>{const n=u()(t,"elements",[]).map((e=>{const t=u()(e,"name","").split(".storageclass.storage.k8s.io/requests.storage")[0];return{label:t,value:t}}));e((0,c.pZ)({page:"setup",field:"storageClass",value:n[0].value})),e((0,c.gm)(n))})).catch((e=>{console.error(e)}))}),[t,n,e]);const _=(t,n)=>{e((0,c.pZ)({page:"setup",field:t,value:n}))};return(0,g.jsxs)(s.Fragment,{children:[(0,g.jsxs)(a.azJ,{className:"inputItem",sx:{marginBottom:12},children:[(0,g.jsx)(f.A,{children:"New Pool Configuration"}),(0,g.jsx)("span",{className:"muted",children:"Configure a new Pool to expand MinIO storage"})]}),(0,g.jsxs)(a.Hbc,{withBorders:!1,containerPadding:!1,children:[(0,g.jsx)(a.cl_,{id:"number_of_nodes",name:"number_of_nodes",onChange:e=>{const t=parseInt(e.target.value);e.target.validity.valid&&!isNaN(t)?_("numberOfNodes",t):isNaN(t)&&_("numberOfNodes",0)},label:"Number of Servers",value:i,error:y.number_of_nodes||"",pattern:"[0-9]*"}),(0,g.jsx)(a.cl_,{id:"pool_size",name:"pool_size",onChange:e=>{const t=parseInt(e.target.value);e.target.validity.valid&&!isNaN(t)?_("volumeSize",t):isNaN(t)&&_("volumeSize",0)},label:"Volume Size",value:h,error:y.pool_size||"",pattern:"[0-9]*",overlayObject:(0,g.jsx)(p.A,{id:"quota_unit",onUnitChange:()=>{},unitSelected:"Gi",unitsList:[{label:"Gi",value:"Gi"}],disabled:!0})}),(0,g.jsx)(a.cl_,{id:"volumes_per_sever",name:"volumes_per_sever",onChange:e=>{const t=parseInt(e.target.value);e.target.validity.valid&&!isNaN(t)?_("volumesPerServer",t):isNaN(t)&&_("volumesPerServer",0)},label:"Volumes per Server",value:v,error:y.volumes_per_server||"",pattern:"[0-9]*"}),(0,g.jsx)(a.l6P,{id:"storage_class",name:"storage_class",onChange:e=>{_("storageClass",e)},label:"Storage Class",value:d,options:n,disabled:n.length<1}),(0,g.jsxs)(a.azJ,{sx:{display:"flex",justifyContent:"center",marginLeft:30,gap:25,"& .sizeNumber":{fontSize:35,fontWeight:700,textAlign:"center"},"& .sizeDescription":{fontSize:14,textAlign:"center"}},children:[(0,g.jsxs)(a.azJ,{children:[(0,g.jsx)(a.azJ,{className:"sizeNumber",children:(0,r.nO)(C.toString(10))}),(0,g.jsx)(a.azJ,{className:"sizeDescription muted",children:"Instance Capacity"})]}),(0,g.jsxs)(a.azJ,{children:[(0,g.jsx)(a.azJ,{className:"sizeNumber",children:(0,r.nO)(b.toString(10))}),(0,g.jsx)(a.azJ,{className:"sizeDescription muted",children:"Total Capacity"})]})]})]})]})};var v=n(969);const y=()=>{const e=(0,l.jL)(),t=(0,o.d4)((e=>e.addPool.configuration.securityContextEnabled)),n=(0,o.d4)((e=>e.addPool.configuration.securityContext)),i=(0,o.d4)((e=>e.addPool.configuration.customRuntime)),r=(0,o.d4)((e=>e.addPool.configuration.runtimeClassName)),[d,u]=(0,s.useState)({}),p=(0,s.useCallback)(((t,n)=>{e((0,c.pZ)({page:"configuration",field:t,value:n}))}),[e]);(0,s.useEffect)((()=>{let s=[];t&&(s=[{fieldKey:"pool_securityContext_runAsUser",required:!0,value:n.runAsUser,customValidation:""===n.runAsUser||parseInt(n.runAsUser)<0,customValidationMessage:"runAsUser must be present and be 0 or more"},{fieldKey:"pool_securityContext_runAsGroup",required:!0,value:n.runAsGroup,customValidation:""===n.runAsGroup||parseInt(n.runAsGroup)<0,customValidationMessage:"runAsGroup must be present and be 0 or more"},{fieldKey:"pool_securityContext_fsGroup",required:!0,value:n.fsGroup,customValidation:""===n.fsGroup||parseInt(n.fsGroup)<0,customValidationMessage:"fsGroup must be present and be 0 or more"}]);const a=(0,m.D)(s);e((0,c.ck)({page:"configure",status:0===Object.keys(a).length})),u(a)}),[e,t,n]);const x=e=>{u((0,v.p)(d,e))};return(0,g.jsxs)(s.Fragment,{children:[(0,g.jsxs)(a.azJ,{className:"inputItem",sx:{marginBottom:12},children:[(0,g.jsx)(f.A,{children:"Configure"}),(0,g.jsx)("span",{className:"muted",children:"Aditional Configurations for the new Pool"})]}),(0,g.jsxs)(a.Hbc,{withBorders:!1,containerPadding:!1,children:[(0,g.jsx)(a.dOG,{value:"tenantConfig",id:"pool_configuration",name:"pool_configuration",checked:t,onChange:e=>{const t=e.target.checked;p("securityContextEnabled",t)},label:"Security Context"}),t&&(0,g.jsxs)("fieldset",{className:"inputItem",style:{marginBottom:15},children:[(0,g.jsx)("legend",{children:"Pool's Security Context"}),(0,g.jsxs)(a.xA9,{item:!0,xs:12,sx:{marginRight:15,"& .containerItem":{marginRight:15},"& .multiContainer":{display:"flex",alignItems:"center",justifyContent:"flex-start"},"& .responsiveSectionItem":{"@media (max-width: 900px)":{flexFlow:"column",alignItems:"flex-start","& div > div":{marginBottom:5,marginRight:0}}}},children:[(0,g.jsxs)("div",{className:"multiContainer".concat(" ","responsiveSectionItem"," inputItem"),children:[(0,g.jsx)("div",{className:"containerItem",children:(0,g.jsx)(a.cl_,{type:"number",id:"pool_securityContext_runAsUser",name:"pool_securityContext_runAsUser",onChange:e=>{p("securityContext",{...n,runAsUser:e.target.value}),x("pool_securityContext_runAsUser")},label:"Run As User",value:n.runAsUser,required:!0,error:d.pool_securityContext_runAsUser||"",min:"0"})}),(0,g.jsx)("div",{className:"containerItem",children:(0,g.jsx)(a.cl_,{type:"number",id:"pool_securityContext_runAsGroup",name:"pool_securityContext_runAsGroup",onChange:e=>{p("securityContext",{...n,runAsGroup:e.target.value}),x("pool_securityContext_runAsGroup")},label:"Run As Group",value:n.runAsGroup,required:!0,error:d.pool_securityContext_runAsGroup||"",min:"0"})})]}),(0,g.jsx)("div",{className:"multiContainer".concat(" ","responsiveSectionItem"," inputItem"),children:(0,g.jsx)("div",{className:"containerItem",children:(0,g.jsx)(a.cl_,{type:"number",id:"pool_securityContext_fsGroup",name:"pool_securityContext_fsGroup",onChange:e=>{p("securityContext",{...n,fsGroup:e.target.value}),x("pool_securityContext_fsGroup")},label:"FsGroup",value:n.fsGroup,required:!0,error:d.pool_securityContext_fsGroup||"",min:"0"})})})]}),(0,g.jsx)("br",{}),(0,g.jsx)(a.xA9,{item:!0,xs:12,sx:{marginRight:15},children:(0,g.jsx)(a.dOG,{value:"securityContextRunAsNonRoot",id:"pool_securityContext_runAsNonRoot",name:"pool_securityContext_runAsNonRoot",checked:n.runAsNonRoot,onChange:e=>{const t=e.target.checked;p("securityContext",{...n,runAsNonRoot:t})},label:"Do not run as Root"})})]}),(0,g.jsx)(a.dOG,{value:"customRuntime",id:"tenant_custom_runtime",name:"tenant_custom_runtime",checked:i,onChange:e=>{const t=e.target.checked;p("customRuntime",t)},label:"Custom Runtime Configurations"}),i&&(0,g.jsxs)("fieldset",{className:"inputItem",children:[(0,g.jsx)("legend",{children:"Custom Runtime Configurations"}),(0,g.jsx)(a.cl_,{id:"tenant_runtime_runtimeClassName",name:"tenant_runtime_runtimeClassName",onChange:e=>{p("runtimeClassName",e.target.value),x("tenant_runtime_runtimeClassName")},label:"Runtime Class Name",value:r,error:d.tenant_runtime_runtimeClassName||""})]})]})]})};var j=n(4159),C=n(8997);const b=()=>{const e=(0,l.jL)(),t=(0,o.d4)((e=>e.addPool.affinity.podAffinity)),n=(0,o.d4)((e=>e.addPool.affinity.nodeSelectorLabels)),i=(0,o.d4)((e=>e.addPool.affinity.withPodAntiAffinity)),r=(0,o.d4)((e=>e.addPool.nodeSelectorPairs)),d=(0,o.d4)((e=>e.addPool.tolerations)),[u,p]=(0,s.useState)({}),[h,v]=(0,s.useState)(!0),[y,b]=(0,s.useState)({}),[_,A]=(0,s.useState)([]),N=(0,s.useCallback)(((t,n)=>{e((0,c.pZ)({page:"affinity",field:t,value:n}))}),[e]);(0,s.useEffect)((()=>{h&&x.A.invoke("GET","/api/v1/nodes/labels").then((e=>{v(!1),b(e);let t=[];for(let n in e)t.push({label:n,value:n});A(t)})).catch((t=>{v(!1),e((0,j.Dy)(t)),b({})}))}),[e,h]),(0,s.useEffect)((()=>{if(r){const e=r.filter((e=>""!==e.key)).map((e=>"".concat(e.key,"=").concat(e.value))).filter(((e,t,n)=>n.indexOf(e)===t)).join("&");N("nodeSelectorLabels",e)}}),[r,N]),(0,s.useEffect)((()=>{let s=[];if("nodeSelector"===t){let e=!0;const t=n.split("&");1===t.length&&""===t[0]&&(e=!1),t.forEach(((n,s)=>{const a=n.split("=");2!==a.length&&(e=!1),s+1!==t.length&&(""!==a[0]&&""!==a[1]||(e=!1))})),s=[...s,{fieldKey:"labels",required:!0,value:n,customValidation:!e,customValidationMessage:"You need to add at least one label key-pair"}]}const a=(0,m.D)(s);e((0,c.ck)({page:"affinity",status:0===Object.keys(a).length})),p(a)}),[e,t,n]);const S=(t,n,s)=>{const a={...d[t],[n]:s};e((0,c.uC)({index:t,tolerationValue:a}))};return(0,g.jsxs)(s.Fragment,{children:[(0,g.jsxs)(a.azJ,{className:"inputItem",sx:{marginBottom:12},children:[(0,g.jsx)(f.A,{children:"Pod Placement"}),(0,g.jsx)("span",{className:"muted",children:"Configure how pods will be assigned to nodes"})]}),(0,g.jsxs)(a.azJ,{sx:{"& .affinityConfigField":{marginBottom:10,display:"flex"},"& .affinityLabelKey":{"& div:first-child":{marginBottom:0}},"& .affinityLabelValue":{marginLeft:10,"& div:first-child":{marginBottom:0}},"& .rowActions":{display:"flex",alignItems:"center",gap:10,marginLeft:10},"& .overlayAction":{display:"flex",alignItems:"center",gap:10},"& .affinityRow":{marginBottom:10,display:"flex",gap:10}},children:[(0,g.jsx)(a.xA9,{item:!0,xs:12,sx:{display:"flex","& .affinityFieldLabel":{display:"flex",flexFlow:"column",flex:1}},children:(0,g.jsxs)(a.xA9,{item:!0,className:"affinityFieldLabel",children:[(0,g.jsx)("h2",{style:{marginBottom:10},children:"Type"}),(0,g.jsx)(a.azJ,{className:"muted",sx:{marginBottom:12},children:"MinIO supports multiple configurations for Pod Affinity"}),(0,g.jsx)(a.z6M,{currentValue:t,id:"affinity-options",name:"affinity-options",label:" ",onChange:e=>{N("podAffinity",e.target.value)},selectorOptions:[{label:"None",value:"none"},{label:"Default (Pod Anti-Affinity)",value:"default"},{label:"Node Selector",value:"nodeSelector"}],displayInColumn:!0})]})}),"nodeSelector"===t&&(0,g.jsxs)(s.Fragment,{children:[(0,g.jsx)("br",{}),(0,g.jsx)(a.xA9,{item:!0,xs:12,children:(0,g.jsx)(a.dOG,{value:"with_pod_anti_affinity",id:"with_pod_anti_affinity",name:"with_pod_anti_affinity",checked:i,onChange:e=>{const t=e.target.checked;N("withPodAntiAffinity",t)},label:"With Pod Anti-Affinity"})}),(0,g.jsxs)(a.xA9,{item:!0,xs:12,children:[(0,g.jsx)("h3",{children:"Labels"}),(0,g.jsx)("span",{className:"error",children:u.labels}),(0,g.jsx)(a.xA9,{container:!0,children:r&&r.map(((t,n)=>(0,g.jsxs)(a.xA9,{item:!0,xs:12,className:"affinityConfigField",children:[(0,g.jsxs)(a.xA9,{item:!0,xs:5,className:"affinityLabelKey",children:[_.length>0&&(0,g.jsx)(a.l6P,{onChange:t=>{const s={key:t,value:y[t][0]},a=[...r];a[n]=s,e((0,c._l)(a))},id:"select-access-policy",name:"select-access-policy",label:"",value:t.key,options:_}),0===_.length&&(0,g.jsx)(a.cl_,{id:"nodeselector-key-".concat(n.toString()),label:"",name:"nodeselector-".concat(n.toString()),value:t.key,onChange:t=>{const s=[...r];s[n]={key:s[n].key,value:t.target.value},e((0,c._l)(s))},index:n,placeholder:"Key"})]}),(0,g.jsxs)(a.xA9,{item:!0,xs:5,className:"affinityLabelValue",children:[_.length>0&&(0,g.jsx)(a.l6P,{onChange:t=>{const s=[...r];s[n]={key:s[n].key,value:t},e((0,c._l)(s))},id:"select-access-policy",name:"select-access-policy",label:"",value:t.value,options:y[t.key]?y[t.key].map((e=>({label:e,value:e}))):[]}),0===_.length&&(0,g.jsx)(a.cl_,{id:"nodeselector-value-".concat(n.toString()),label:"",name:"nodeselector-".concat(n.toString()),value:t.value,onChange:t=>{const s=[...r];s[n]={key:s[n].key,value:t.target.value},e((0,c._l)(s))},index:n,placeholder:"value"})]}),(0,g.jsxs)(a.xA9,{item:!0,xs:2,className:"rowActions",children:[(0,g.jsx)("div",{className:"overlayAction",children:(0,g.jsx)(a.K0,{size:"small",onClick:()=>{const t=[...r];_.length>0?t.push({key:_[0].value,value:y[_[0].value][0]}):t.push({key:"",value:""}),e((0,c._l)(t))},children:(0,g.jsx)(a.REV,{})})}),r.length>1&&(0,g.jsx)("div",{className:"overlayAction",children:(0,g.jsx)(a.K0,{size:"small",onClick:()=>{const t=r.filter(((e,t)=>t!==n));e((0,c._l)(t))},children:(0,g.jsx)(a.YPx,{})})})]})]},"affinity-keyVal-".concat(n.toString()))))})]})]}),(0,g.jsx)(a.xA9,{item:!0,xs:12,className:"affinityConfigField",children:(0,g.jsxs)(a.xA9,{item:!0,className:"affinityFieldLabel",children:[(0,g.jsx)("h3",{children:"Tolerations"}),(0,g.jsx)("span",{className:"error",children:u.tolerations}),(0,g.jsx)(a.xA9,{container:!0,children:d&&d.map(((t,n)=>{var s;return(0,g.jsxs)(a.xA9,{item:!0,xs:12,className:"affinityRow",children:[(0,g.jsx)(C.A,{effect:t.effect,onEffectChange:e=>{S(n,"effect",e)},tolerationKey:t.key,onTolerationKeyChange:e=>{S(n,"key",e)},operator:t.operator,onOperatorChange:e=>{S(n,"operator",e)},value:t.value,onValueChange:e=>{S(n,"value",e)},tolerationSeconds:(null===(s=t.tolerationSeconds)||void 0===s?void 0:s.seconds)||0,onSecondsChange:e=>{S(n,"tolerationSeconds",{seconds:e})},index:n}),(0,g.jsx)("div",{className:"overlayAction",children:(0,g.jsx)(a.K0,{size:"small",onClick:()=>{e((0,c.zV)())},disabled:n!==d.length-1,children:(0,g.jsx)(a.REV,{})})}),(0,g.jsx)("div",{className:"overlayAction",children:(0,g.jsx)(a.K0,{size:"small",onClick:()=>e((0,c.U0)(n)),disabled:d.length<=1,children:(0,g.jsx)(a.YPx,{})})})]},"affinity-keyVal-".concat(n.toString()))}))})]})})]})]})};var _=n(9632);const A=()=>{const e=(0,l.jL)(),t=(0,o.d4)((e=>e.addPool.setup.storageClass)),n=(0,o.d4)((e=>e.addPool.validPages)),s=!(0,o.d4)((e=>e.addPool.sending))&&""!==t&&["setup","affinity","configure"].every((e=>n.includes(e)));return(0,g.jsx)(a.$nd,{id:"wizard-button-Create",variant:"callAction",onClick:()=>{e((0,_.K)())},disabled:!s,label:"Create"},"button-AddTenant-Create")};var N=n(4770);const S=()=>{const e=(0,l.jL)(),t=(0,i.Zp)(),n=(0,o.d4)((e=>e.tenants.tenantInfo)),d=(0,o.d4)((e=>e.addPool.sending)),u=(0,o.d4)((e=>e.addPool.navigateTo)),m="/namespaces/".concat((null===n||void 0===n?void 0:n.namespace)||"","/tenants/").concat((null===n||void 0===n?void 0:n.name)||"","/pools");(0,s.useEffect)((()=>{if(""!==u){const n="".concat(u);e((0,c.iq)()),t(n)}}),[u,t,e]);const p={label:"Cancel",type:"custom",enabled:!0,action:()=>{e((0,c.iq)()),t(m)}},x={componentRender:(0,g.jsx)(A,{},"add-pool-crate")},f=[{label:"Setup",componentRender:(0,g.jsx)(h,{}),buttons:[p,x]},{label:"Configuration",advancedOnly:!0,componentRender:(0,g.jsx)(y,{}),buttons:[p,x]},{label:"Pod Placement",advancedOnly:!0,componentRender:(0,g.jsx)(b,{}),buttons:[p,x]}];return(0,g.jsx)(s.Fragment,{children:(0,g.jsxs)(a.xA9,{item:!0,xs:12,children:[(0,g.jsx)(N.A,{label:(0,g.jsx)(s.Fragment,{children:(0,g.jsx)(a.EGL,{label:"Tenant Pools",onClick:()=>t(m)})})}),(0,g.jsxs)(a.Mxu,{variant:"constrained",children:[(0,g.jsx)(a.azJ,{withBorders:!0,sx:{padding:0,borderBottom:0},children:(0,g.jsx)(a.lcx,{icon:(0,g.jsx)(a.fmr,{}),title:"Add New Pool to ".concat((null===n||void 0===n?void 0:n.name)||""),subTitle:(0,g.jsxs)(s.Fragment,{children:["Namespace: ",(null===n||void 0===n?void 0:n.namespace)||""," / Current Capacity:"," ",(0,r.nO)(((null===n||void 0===n?void 0:n.total_size)||0).toString(10))]}),actions:null})}),d&&(0,g.jsx)(a.xA9,{item:!0,xs:12,children:(0,g.jsx)(a.z21,{})}),(0,g.jsx)(a.azJ,{withBorders:!0,sx:{padding:0,borderTop:0,"& .muted":{fontSize:13}},children:(0,g.jsx)(a.sQ4,{wizardSteps:f,linearMode:!1})})]})]})})}}}]);
//# sourceMappingURL=977.74859670.chunk.js.map