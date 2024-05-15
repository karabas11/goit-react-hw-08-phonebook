"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[320],{6320:function(e,n,r){r.r(n),r.d(n,{default:function(){return Q}});var i=r(4420),t=r(824),a=r(6582),l=r(9640),s=r(2715),o=r(9055),d=r(3634),u=r(8567),c=r(184),p=function(e){var n=e.contact,r=(0,i.I0)();return(0,c.jsx)(t.xu,{maxW:"1200px",bg:"#f0eafb",borderRadius:"6px",boxShadow:"dark-lg",p:"5px",children:(0,c.jsxs)(a.k,{justifyContent:"space-between",alignItems:"center",gap:"12px",ml:"6px",children:[(0,c.jsx)(l.J,{as:u.Rf8,color:"purple.500",w:"22px",h:"22px"}),(0,c.jsxs)(s.x,{fontSize:"16px",children:[n.name,": ",n.number]}),(0,c.jsx)(o.z,{colorScheme:"purple",variant:"solid",size:"sm",_hover:{bg:"#808000"},_active:{bg:"#dddfe2",transform:"scale(0.98)",borderColor:"#bec3c9"},_focus:{boxShadow:"0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)"},onClick:function(){r((0,d.GK)(n.id))},children:"Delete"})]})})},f=r(3553),v=function(e){return e.contacts.items},x=function(e){return e.contacts.loading},m=function(e){return e.filters},h=(0,f.P1)([v,m],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n)}))})),b=r(1413),g=r(4942),y=r(4925),Z=r(9439),j=r(9886),I=r(2791);var k=r(5597),C=r(2481),S=r(2996),P=r(5113),R=["children","styleType","stylePosition","spacing"],_=["as"],F=["as"],T=(0,j.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),q=(0,Z.Z)(T,2),w=q[0],N=q[1],L=(0,k.G)((function(e,n){var r=(0,C.jC)("List",e),i=(0,S.Lr)(e),t=i.children,a=i.styleType,l=void 0===a?"none":a,s=i.stylePosition,o=i.spacing,d=(0,y.Z)(i,R),u=function(e){return I.Children.toArray(e).filter((function(e){return(0,I.isValidElement)(e)}))}(t),p=o?(0,g.Z)({},"& > *:not(style) ~ *:not(style)",{mt:o}):{};return(0,c.jsx)(w,{value:r,children:(0,c.jsx)(P.m.ul,(0,b.Z)((0,b.Z)({ref:n,listStyleType:l,listStylePosition:s,role:"list",__css:(0,b.Z)((0,b.Z)({},r.container),p)},d),{},{children:u}))})}));L.displayName="List",(0,k.G)((function(e,n){e.as;var r=(0,y.Z)(e,_);return(0,c.jsx)(L,(0,b.Z)({ref:n,as:"ol",styleType:"decimal",marginStart:"1em"},r))})).displayName="OrderedList",(0,k.G)((function(e,n){e.as;var r=(0,y.Z)(e,F);return(0,c.jsx)(L,(0,b.Z)({ref:n,as:"ul",styleType:"initial",marginStart:"1em"},r))})).displayName="UnorderedList";var D=(0,k.G)((function(e,n){var r=N();return(0,c.jsx)(P.m.li,(0,b.Z)((0,b.Z)({ref:n},e),{},{__css:r.item}))}));D.displayName="ListItem",(0,k.G)((function(e,n){var r=N();return(0,c.jsx)(l.J,(0,b.Z)((0,b.Z)({ref:n,role:"presentation"},e),{},{__css:r.icon}))})).displayName="ListIcon";var O=function(){var e=(0,i.v9)(h);return(0,c.jsxs)(t.xu,{children:[(0,c.jsx)(s.x,{fontSize:"22px",children:"List of contacts"}),(0,c.jsx)(L,{spacing:"20px",pt:"24px",children:e.map((function(e){return(0,c.jsx)(D,{spacing:"20px",children:(0,c.jsx)(p,{contact:e})},e.id)}))})]})},B=r(6120),z=r(6298),G=r(1170);function H(e){var n=(0,G.uP)().theme,r=(0,B.OX)();return(0,I.useMemo)((function(){return(0,z.Cj)(n.direction,(0,b.Z)((0,b.Z)({},r),e))}),[e,n.direction,r])}var E=r(7236),J=function(){var e=(0,i.v9)(v),n=(0,i.I0)(),r=H();return(0,c.jsxs)("form",{onSubmit:function(i){i.preventDefault();var t=i.target,a=i.target[0].value,l=i.target[1].value;if(e.some((function(e){return e.name===a})))return r({title:"Warning!",description:"This contact is already there.",status:"warning",duration:9e3,isClosable:!0}),t.reset();n((0,d.uK)({name:a,number:l})),t.reset()},children:[(0,c.jsx)(s.x,{fontSize:"22px",children:"Add a contact"}),(0,c.jsx)(E.I,{type:"text",value:e.name,placeholder:"Name",variant:"filled",bg:"#f0eafb",boxShadow:"dark-lg",mb:"12px"}),(0,c.jsx)(E.I,{type:"tel",value:e.number,placeholder:"Phone number",variant:"filled",bg:"#f0eafb",boxShadow:"dark-lg",mb:"12px"}),(0,c.jsx)(o.z,{type:"submit",colorScheme:"purple",variant:"solid",size:"sm",_hover:{bg:"#808000"},_active:{bg:"#dddfe2",transform:"scale(0.98)",borderColor:"#bec3c9"},_focus:{boxShadow:"0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)"},children:"ADD"})]})},M=r(3165),A=function(){var e=(0,i.v9)(m),n=(0,i.I0)();return(0,c.jsxs)(t.xu,{mb:"12px",children:[(0,c.jsx)(s.x,{fontSize:"22px",children:"Find contacts by name"}),(0,c.jsx)(E.I,{type:"text",value:e,placeholder:"Enter contact name",variant:"filled",bg:"#f0eafb",boxShadow:"dark-lg",onChange:function(e){var r=e.target.value.toLowerCase().trim();n((0,M.T)(r))}})]})};function Q(){var e=(0,i.I0)(),n=(0,i.v9)(x);return(0,I.useEffect)((function(){e((0,d.yF)())}),[e]),(0,c.jsxs)(a.k,{flexDirection:"column",p:"30px",gap:"20px",children:[(0,c.jsx)("div",{children:n&&"Request in progress..."}),(0,c.jsx)(A,{}),(0,c.jsx)(J,{}),(0,c.jsx)(O,{})]})}},5350:function(e,n,r){r.d(n,{NJ:function(){return k},e:function(){return y}});var i=r(1413),t=r(4925),a=r(9439),l=r(9886),s=r(4591),o=r(5597),d=r(2481),u=r(2996),c=r(5113),p=r(6992),f=r(2791),v=r(184),x=["id","isRequired","isInvalid","isDisabled","isReadOnly"],m=["getRootProps","htmlProps"],h=(0,l.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),b=(0,a.Z)(h,2),g=b[0],y=b[1],Z=(0,l.k)({strict:!1,name:"FormControlContext"}),j=(0,a.Z)(Z,2),I=j[0],k=j[1];var C=(0,o.G)((function(e,n){var r=(0,d.jC)("Form",e),l=function(e){var n=e.id,r=e.isRequired,l=e.isInvalid,o=e.isDisabled,d=e.isReadOnly,u=(0,t.Z)(e,x),c=(0,f.useId)(),v=n||"field-".concat(c),m="".concat(v,"-label"),h="".concat(v,"-feedback"),b="".concat(v,"-helptext"),g=(0,f.useState)(!1),y=(0,a.Z)(g,2),Z=y[0],j=y[1],I=(0,f.useState)(!1),k=(0,a.Z)(I,2),C=k[0],S=k[1],P=(0,f.useState)(!1),R=(0,a.Z)(P,2),_=R[0],F=R[1],T=(0,f.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:b},e),{},{ref:(0,s.lq)(n,(function(e){e&&S(!0)}))})}),[b]),q=(0,f.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},e),{},{ref:n,"data-focus":(0,p.PB)(_),"data-disabled":(0,p.PB)(o),"data-invalid":(0,p.PB)(l),"data-readonly":(0,p.PB)(d),id:void 0!==e.id?e.id:m,htmlFor:void 0!==e.htmlFor?e.htmlFor:v})}),[v,o,_,l,d,m]),w=(0,f.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:h},e),{},{ref:(0,s.lq)(n,(function(e){e&&j(!0)})),"aria-live":"polite"})}),[h]),N=(0,f.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)((0,i.Z)({},e),u),{},{ref:n,role:"group","data-focus":(0,p.PB)(_),"data-disabled":(0,p.PB)(o),"data-invalid":(0,p.PB)(l),"data-readonly":(0,p.PB)(d)})}),[u,o,_,l,d]),L=(0,f.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},e),{},{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!r,isInvalid:!!l,isReadOnly:!!d,isDisabled:!!o,isFocused:!!_,onFocus:function(){return F(!0)},onBlur:function(){return F(!1)},hasFeedbackText:Z,setHasFeedbackText:j,hasHelpText:C,setHasHelpText:S,id:v,labelId:m,feedbackId:h,helpTextId:b,htmlProps:u,getHelpTextProps:T,getErrorMessageProps:w,getRootProps:N,getLabelProps:q,getRequiredIndicatorProps:L}}((0,u.Lr)(e)),o=l.getRootProps,h=(l.htmlProps,(0,t.Z)(l,m)),b=(0,p.cx)("chakra-form-control",e.className);return(0,v.jsx)(I,{value:h,children:(0,v.jsx)(g,{value:r,children:(0,v.jsx)(c.m.div,(0,i.Z)((0,i.Z)({},o({},n)),{},{className:b,__css:r.container}))})})}));C.displayName="FormControl",(0,o.G)((function(e,n){var r=k(),t=y(),a=(0,p.cx)("chakra-form__helper-text",e.className);return(0,v.jsx)(c.m.div,(0,i.Z)((0,i.Z)({},null==r?void 0:r.getHelpTextProps(e,n)),{},{__css:t.helperText,className:a}))})).displayName="FormHelperText"},7236:function(e,n,r){r.d(n,{I:function(){return m}});var i=r(1413),t=r(4925),a=r(5350),l=r(6992),s=["isDisabled","isInvalid","isReadOnly","isRequired"],o=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function d(e){var n=function(e){var n,r,s,d=(0,a.NJ)(),u=e.id,c=e.disabled,p=e.readOnly,f=e.required,v=e.isRequired,x=e.isInvalid,m=e.isReadOnly,h=e.isDisabled,b=e.onFocus,g=e.onBlur,y=(0,t.Z)(e,o),Z=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==d?void 0:d.hasFeedbackText)&&(null==d?void 0:d.isInvalid)&&Z.push(d.feedbackId);(null==d?void 0:d.hasHelpText)&&Z.push(d.helpTextId);return(0,i.Z)((0,i.Z)({},y),{},{"aria-describedby":Z.join(" ")||void 0,id:null!=u?u:null==d?void 0:d.id,isDisabled:null!=(n=null!=c?c:h)?n:null==d?void 0:d.isDisabled,isReadOnly:null!=(r=null!=p?p:m)?r:null==d?void 0:d.isReadOnly,isRequired:null!=(s=null!=f?f:v)?s:null==d?void 0:d.isRequired,isInvalid:null!=x?x:null==d?void 0:d.isInvalid,onFocus:(0,l.v0)(null==d?void 0:d.onFocus,b),onBlur:(0,l.v0)(null==d?void 0:d.onBlur,g)})}(e),r=n.isDisabled,d=n.isInvalid,u=n.isReadOnly,c=n.isRequired,p=(0,t.Z)(n,s);return(0,i.Z)((0,i.Z)({},p),{},{disabled:r,readOnly:u,required:c,"aria-invalid":(0,l.Qm)(d),"aria-required":(0,l.Qm)(c),"aria-readonly":(0,l.Qm)(u)})}var u=r(5597),c=r(2481),p=r(2996),f=r(5113),v=r(184),x=["htmlSize"],m=(0,u.G)((function(e,n){var r=e.htmlSize,a=(0,t.Z)(e,x),s=(0,c.jC)("Input",a),o=d((0,p.Lr)(a)),u=(0,l.cx)("chakra-input",e.className);return(0,v.jsx)(f.m.input,(0,i.Z)((0,i.Z)({size:r},o),{},{__css:s.field,ref:n,className:u}))}));m.displayName="Input",m.id="Input"}}]);
//# sourceMappingURL=320.6532bc2c.chunk.js.map