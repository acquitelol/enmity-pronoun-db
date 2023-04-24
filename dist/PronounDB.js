function T(...e){return window.enmity.modules.getByProps(...e)}function Q(...e){return window.enmity.modules.getByName(...e)}window.enmity.modules.common;function ce(e){window.enmity.plugins.registerPlugin(e)}function de(e){return window.enmity.patcher.create(e)}const s=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const t=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const X=window.enmity.modules.common.Toasts,M=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const I=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale;const ue=window.enmity.modules.common.Profiles;window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function J(e,o,n){window.enmity.settings.set(e,o,n)}function v(e,o,n){return window.enmity.settings.getBoolean(e,o,n)}function u(e){return window.enmity.assets.getIDByName(e)}var C={Failed:u("Small"),Delete:u("ic_message_delete"),Copy:u("toast_copy_link"),Open:u("ic_leave_stage"),Clipboard:u("pending-alert"),Clock:u("clock"),Pronoun:u("ic_accessibility_24px"),Settings:{Toasts:{Settings:u("ic_selection_checked_24px"),Failed:u("ic_close_circle_24px")},Initial:u("coffee"),Update:u("discover"),Locale:u("ic_locale_24px"),External:u("ic_raised_hand_list"),Edit:u("ic_edit_24px")}};const pe=(e=.1)=>({shadowColor:"#000",shadowOffset:{width:1,height:4},shadowOpacity:e,shadowRadius:4.65,elevation:8}),he=(e,o)=>{X.open({content:o=="clipboard"?`Copied ${e} to clipboard.`:e,source:o=="clipboard"?C.Clipboard:C.Settings.Initial})};var x={shadow:pe,displayToast:he},b="PronounDB",_="1.2.1",ge="stable",ye="Displays a Pronoun from PronounDB next to your name in the chat :3",we=[{name:"Acquite<3",id:"581573474296791211",profile:"https://github.com/acquitelol"}],D={download:"https://raw.githubusercontent.com/acquitelol/enmity-pronoun-db/main/dist/PronounDB.js",repo:"https://github.com/acquitelol/enmity-pronoun-db",pronoundb:"https://pronoundb.org/",build:"patch-1.4.56",hash:"61610d12"},fe="#ff91ff",F={name:b,version:_,release:ge,description:ye,authors:we,plugin:D,color:fe},N=(e,o,n,r,a)=>{try{return e(...o)}catch(m){console.warn(`[${n}] The following error happened when trying to ${r} ${a!=null?a:"unspecificied label"}: ${m}`);return}};const Z=(e,o,n,r)=>N(()=>{if(e){e.length++,n++;for(let a=e.length-1;a>=n;a--)e[a]=e[a-1];return e[n-1]=o,e.length}},[e,o,n],b,"insert an item at",r),Te=(e,o,n)=>N(()=>{let r=[];for(let a=0;a<e.length;a++)Z(r,o(e[a],a,e),r.length);return r},[e,o],b,"map an array at",n);var ee={mapItem:Te,insertItem:Z};const{native:L}=window.enmity;function ve(){L.reload()}const be=L.version;L.build,L.device,L.version;async function Ee(){await N(async function(){const e=`${D.download}?${Math.floor(Math.random()*1001)}.js`,o=await(await fetch(e)).text(),n=o.match(/\d+\.\d+\.\d+/g),r=o.match(/hash:"(.*?)"/);if(!n&&!r)return Ce(b,[_,D.build]);const a=n&&n[0],m=r&&r[1];return a&&a!=_?te(e,a,"version"):m&&m!=D.hash?te(e,m,"build"):Se(b,[_,D.hash])},[D],b,"checking if latest version at","the async check for updates callback")}const te=(e,o,n)=>{M.show({title:"Update found",body:`A newer ${n} is available for ${b}. ${n=="build"?`
The version will remain at ${_}, but the build will update to ${o}.`:""}
Would you like to install ${n} \`${o}\` now?`,confirmText:"Update",cancelText:"Not now",onConfirm:()=>xe(e,o,n)})},Se=(e,[o,n])=>{console.log(`[${e}] Plugin is on the latest update, which is version ${o} and build ${n}`),M.show({title:"Already on latest",body:`${e} is already updated to the latest version.
Version: \`${o}\`
Build: \`${n}\``,confirmText:"Okay"})},Ce=(e,[o,n])=>{console.log(`[${e}] Plugin failed to update to the latest version and build, remaining at ${o} and ${n}`),M.show({title:"Failed",body:`${e} to find a new version or build.
The current versions will remain as follows:
Version: \`${o}\`
Build: \`${n}\``,confirmText:"Okay"})};async function xe(e,o,n){await N(async function(){window.enmity.plugins.installPlugin(e,({data:r})=>{r=="installed_plugin"||r=="overridden_plugin"?M.show({title:`Updated ${b}`,body:`Successfully updated to ${n} \`${o}\`. 
Would you like to reload Discord now?`,confirmText:"Reload",cancelText:"Not now",onConfirm:()=>ve()}):console.log(`[${b}] Plugin failed to update to ${n} ${o}.`)})},[e,o,n],b,"installing plugin at","new version available")}var Pe={checkForUpdates:Ee},p={map:{},queue:[],fetching:!1,referenceMap:{hh:"he/him",hi:"he/it",hs:"he/she",ht:"he/they",ih:"it/him",ii:"it/its",is:"it/she",it:"it/they",shh:"she/he",sh:"she/her",si:"she/it",st:"she/they",th:"they/he",ti:"they/it",ts:"they/she",tt:"they/them",any:"any",other:"other",ask:"ask",avoid:"avoid pronouns, use name",unspecified:"unspecified"},async updateQueuedPronouns(){if(this.queue.length<=0||this.fetching)return;const e=this.queue.splice(0,49),o=a=>this.queue.length<=0?a:this.map[a]?o(this.queue.shift()):a;for(const a of e)this.map[a]&&(e[a]=o(a));this.fetching=!0;const n=await(await fetch(`https://pronoundb.org/api/v1/lookup-bulk?platform=discord&ids=${e.join(",")}`,{method:"GET",headers:{Accept:"application/json","X-PronounDB-Source":"Enmity"}})).json(),r=Object.fromEntries(Object.entries(n).filter(([a,m])=>!isNaN(+a)));Object.assign(this.map,r),this.fetching=!1,this.queue.length>0&&this.updateQueuedPronouns()}};const{components:i}=window.enmity;i.Alert,i.Button,i.FlatList;const Y=i.Image;i.ImageBackground,i.KeyboardAvoidingView,i.Modal,i.Pressable,i.RefreshControl;const Re=i.ScrollView;i.SectionList,i.StatusBar,i.StyleSheet,i.Switch;const S=i.Text;i.TextInput,i.TouchableHighlight;const O=i.TouchableOpacity;i.TouchableWithoutFeedback,i.Touchable;const y=i.View;i.VirtualizedList,i.Form,i.FormArrow,i.FormCTA,i.FormCTAButton,i.FormCardSection,i.FormCheckbox;const G=i.FormDivider;i.FormHint,i.FormIcon,i.FormInput,i.FormLabel,i.FormRadio;const h=i.FormRow;i.FormSection,i.FormSelect,i.FormSubLabel;const oe=i.FormSwitch;i.FormTernaryCheckBox,i.FormText,i.FormTextColors,i.FormTextSizes;var ne,ie;const $e=(ie=(ne=T("View","Text"))==null?void 0:ne.Dimensions)==null?void 0:ie.get("window").width;var ae=({style:e,source:o})=>{const[n,r]=t.useState({width:0,height:0}),[a,m]=t.useState(0),f=()=>{const l=P=>typeof P=="string"?parseInt(P.replace("%",""))*$e/100:P,c=l(e.width);if(!e.maxWidth)return c;const E=l(e.maxWidth);return c>E?E:c};return t.useEffect(()=>{Y.getSize(o,(l,c)=>{r({width:l,height:c})},l=>{console.error(`[${F.name}] ${l} when fetching ${o}`)}),m(f())},[]),t.createElement(Y,{style:[...Array.isArray(e)?e:[e],{height:a*(n.height/n.width)}],source:{uri:o},resizeMode:"stretch"})};const{Animated:k}=window.enmity.modules.common.Components.General,re=T("transitionToGuild"),H=T("getUser","getCurrentUser"),g=I.createThemedStyleSheet({container:{marginTop:25,marginLeft:"5%",marginBottom:-15,flexDirection:"row"},textContainer:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap",...x.shadow()},image:{width:75,height:75,borderRadius:10,...x.shadow()},mainText:{opacity:.975,letterSpacing:.25},header:{color:s.ThemeColorMap.HEADER_PRIMARY,fontFamily:s.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},subHeader:{color:s.ThemeColorMap.HEADER_SECONDARY,fontSize:12.75}});var De=({name:e,version:o,plugin:n,authors:r})=>{var a,m;const f=t.useRef(new k.Value(1)).current,l=()=>k.spring(f,{toValue:1.1,duration:10,useNativeDriver:!0}).start(),c=()=>k.spring(f,{toValue:1,duration:250,useNativeDriver:!0}).start(),E=()=>ue.showUserProfile({userId:H.getCurrentUser().id}),P={transform:[{scale:f}]};return t.createElement(t.Fragment,null,t.createElement(y,{style:g.container},t.createElement(O,{onPress:E,onPressIn:l,onPressOut:c},t.createElement(k.View,{style:P},t.createElement(Y,{style:[g.image],source:{uri:(m=(a=H==null?void 0:H.getCurrentUser())==null?void 0:a.getAvatarURL())==null?void 0:m.replace("webp","png")}}))),t.createElement(y,{style:g.textContainer},t.createElement(O,{onPress:()=>re.openURL(n.repo)},t.createElement(S,{style:[g.mainText,g.header]},e)),t.createElement(y,{style:{flexDirection:"row"}},t.createElement(S,{style:[g.mainText,g.subHeader]},"A project by"),ee.mapItem(r,(d,R,$)=>t.createElement(O,{onPress:()=>re.openURL(d.profile)},t.createElement(S,{style:[g.mainText,g.subHeader,{paddingLeft:4,fontFamily:s.Fonts.DISPLAY_BOLD,flexDirection:"row"}]},d.name,R<$.length-1?",":null)))),t.createElement(y,null,t.createElement(O,{style:{flexDirection:"row"}},t.createElement(S,{style:[g.mainText,g.subHeader]},"Version:"),t.createElement(S,{style:[g.mainText,g.subHeader,{paddingLeft:4,fontFamily:s.Fonts.DISPLAY_BOLD}]},o))))))};const le=I.createThemedStyleSheet({text:{color:s.ThemeColorMap.HEADER_SECONDARY,paddingLeft:"5.5%",paddingRight:10,marginBottom:10,letterSpacing:.25,fontFamily:s.Fonts.PRIMARY_BOLD,fontSize:12}});var q=({label:e,children:o,style:n})=>t.createElement(y,{style:[n,{marginTop:10}]},t.createElement(S,{style:[le.text,le.optionText]},e.toUpperCase()),o);const se=T("transitionToGuild","openURL"),U=parseInt(be.split(".")[0])>163?15:0,w=I.createThemedStyleSheet({icon:{color:s.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:s.ThemeColorMap.TEXT_MUTED,fontFamily:s.Fonts.PRIMARY_MEDIUM},container:{width:"90%",marginLeft:"5%",borderRadius:10,backgroundColor:s.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,...x.shadow()},subheaderText:{color:s.ThemeColorMap.HEADER_SECONDARY,textAlign:"center",margin:10,marginBottom:50,letterSpacing:.25,fontFamily:s.Fonts.PRIMARY_BOLD,fontSize:14},image:{width:"100%",maxWidth:350,borderRadius:10}});var Ae=({manifest:e})=>{const[o,n]=t.useState(v(e.name,"isTimestamp",!1)),[r,a]=t.useState(v(e.name,"isRole",!0));return t.createElement(Re,null,t.createElement(De,{name:e.name,version:e.version,plugin:e.plugin,authors:e.authors}),t.createElement(y,{style:{marginTop:20}},t.createElement(q,{label:"Preferences"},t.createElement(y,{style:[w.container]},t.createElement(h,{label:"Timestamps",subLabel:"Use Timestamps instead of OP Tag for the pronoun in the chat area.",onLongPress:()=>x.displayToast(`By default, ${e.name} will use the OP tag to display pronouns. Toggling this option will always use Timestamps instead of OP tag for pronouns.`,"tooltip"),leading:t.createElement(h.Icon,{style:w.icon,source:C.Settings.Locale}),trailing:t.createElement(oe,{value:v(e.name,"isTimestamp",!1),style:{marginLeft:-U},onValueChange:()=>{J(e.name,"isTimestamp",!v(e.name,"isTimestamp",!1)),n(v(e.name,"isTimestamp",!1))}})}),t.createElement(G,null),t.createElement(h,{label:"Roles",subLabel:"Show the pronoun styled as a role instead of plain text inside of profiles.",onLongPress:()=>x.displayToast(`With this option enabled, ${e.name} will style pronouns as roles in profiles. Otherwise, it will style them as plain text.`,"tooltip"),leading:t.createElement(h.Icon,{style:w.icon,source:C.Settings.Edit}),trailing:t.createElement(oe,{value:v(e.name,"isRole",!0),style:{marginLeft:-U},onValueChange:()=>{J(e.name,"isRole",!v(e.name,"isRole",!0)),a(v(e.name,"isRole",!0))}})}))),t.createElement(q,{label:"Previews"},t.createElement(y,{style:{...w.container,maxWidth:350}},t.createElement(ae,{style:w.image,source:`https://cdn.discordapp.com/attachments/${o?"1011346757214543875/1075007230337896448/pronoun-timestamp.png":"1011346757214543875/1075007230107193374/pronoun-tag.png"}`})),t.createElement(y,{style:{...w.container,marginTop:10,maxWidth:350}},t.createElement(ae,{style:w.image,source:`https://cdn.discordapp.com/attachments/${r?"1011346757214543875/1075007778399199282/profile-role.png":"1011346757214543875/1075007778067841044/profile-plain.png"}`}))),t.createElement(q,{label:"Source"},t.createElement(y,{style:w.container},t.createElement(h,{label:"Check for Updates",subLabel:`Search for any ${e.name} updates and notify you if an update is available.`,onLongPress:()=>x.displayToast(`Search GitHub for any new version or build of ${e.name} and prompts you to update, and then prompts you to restart Enmity afterwards.`,"tooltip"),leading:t.createElement(h.Icon,{style:w.icon,source:C.Settings.Update}),trailing:()=>t.createElement(h.Arrow,{style:{marginLeft:-U}}),onPress:async function(){await Pe.checkForUpdates()}}),t.createElement(G,null),t.createElement(h,{label:"Source",subLabel:`Open the repository of ${e.name} externally.`,onLongPress:()=>x.displayToast(`Opens the repository of ${e.name} on GitHub in an external page to view any source code of the plugin.`,"tooltip"),leading:t.createElement(h.Icon,{style:w.icon,source:C.Open}),trailing:()=>t.createElement(h.Arrow,null),onPress:()=>{se.openURL(e.plugin.repo)}}),t.createElement(G,null),t.createElement(h,{label:"PronounDB",subLabel:`Open the ${e.name} website externally at \`https://pronoundb.org\`.`,onLongPress:()=>x.displayToast("Opens the PronounDB website in an external page which allows you to link your Discord account to PronounDB.","tooltip"),leading:t.createElement(h.Icon,{style:w.icon,source:C.Settings.External}),trailing:()=>t.createElement(h.Arrow,{style:{marginLeft:-U}}),onPress:()=>{se.openURL(e.plugin.pronoundb)}})))),t.createElement(S,{style:w.subheaderText},`Build: (${e.plugin.hash}) Release: (${e.release})`))};function Ie(e,o,n){return window.enmity.utilities.findInReactTree(e,o,n)}const{useThemeContext:_e}=T("useThemeContext"),{meta:{resolveSemanticColor:Fe}}=T("colors","meta"),Le=Q("UserProfileSection"),{ProfileGradientCard:Oe}=T("ProfileGradientCard"),A=I.createThemedStyleSheet({container:{alignSelf:"flex-start",padding:1,borderRadius:9,marginTop:-4},innerContainer:{paddingHorizontal:6,paddingVertical:8,overflow:"hidden",flexDirection:"row",justifyContent:"center",alignItems:"center"},circle:{width:10,height:10,borderRadius:10/2,marginRight:6},fallback:{color:s.ThemeColorMap.BACKGROUND_SECONDARY_ALT},text:{fontFamily:s.Fonts.DISPLAY_NORMAL}});var Be=({pronoun:e})=>{const o=_e(),n=Fe(o.theme,s.ThemeColorMap.TEXT_NORMAL);return t.createElement(Le,{title:"Pronouns"},t.createElement(O,{onPress:()=>X.open({content:e,source:C.Pronoun})},v(F.name,"isRole",!0)?t.createElement(Oe,{style:A.container,fallbackBackground:A.fallback.color},t.createElement(y,{style:A.innerContainer},t.createElement(y,{style:[A.circle,{backgroundColor:n}]}),t.createElement(S,{style:[A.text,{color:n}]},e))):t.createElement(S,{style:[A.text,{fontSize:16,color:n}]},e)))};const V=de("pronoun-db"),Me=T("PRIMARY_INFO_TOP_OFFSET","SECONDARY_INFO_TOP_MARGIN","SIDE_PADDING"),Ne=Q("UserProfileName"),ke=T("getUser"),W=T("View"),{DCDChatManager:Ue}=W.NativeModules,me=I.createThemedStyleSheet({opTagBackgroundColor:{color:s.ThemeColorMap.HEADER_PRIMARY},opTagTextColor:{color:s.ThemeColorMap.BACKGROUND_PRIMARY},mention:{color:s.ThemeColorMap.BACKGROUND_MENTIONED_HOVER}}),Ve={...F,onStart(){V.before(ke,"getUser",(e,o,n)=>{const r=o[0];p.map[r]||ee.insertItem(p.queue,r,p.queue.length,"user id pronoun queue"),p.updateQueuedPronouns()}),V.after(Me.default,"type",(e,o,n)=>{var r,a,m,f,l;const c=(a=(r=Ie(n,d=>{var R,$,j;return((R=d==null?void 0:d.props)==null?void 0:R.children.find(B=>{var z,K;return typeof((K=(z=B==null?void 0:B.props)==null?void 0:z.displayProfile)==null?void 0:K.userId)=="string"}))&&!(d!=null&&d.props.children.find(B=>B.type===Ne))&&(($=d==null?void 0:d.type)==null?void 0:$.displayName)==="View"&&Array.isArray((j=d==null?void 0:d.props)==null?void 0:j.style)}))==null?void 0:r.props)==null?void 0:a.children;if(!c)return n;const{userId:E}=(l=(f=(m=c==null?void 0:c.find(d=>{var R,$;return typeof(($=(R=d==null?void 0:d.props)==null?void 0:R.displayProfile)==null?void 0:$.userId)=="string"}))==null?void 0:m.props)==null?void 0:f.displayProfile)!=null?l:{};if(!E||!p.map[E]||p.referenceMap[p.map[E]]==="unspecified")return n;const P=p.referenceMap[p.map[E]];c.unshift(t.createElement(Be,{pronoun:P}))}),V.before(Ue,"updateRows",(e,o,n)=>{var r,a,m;const f=JSON.parse(o[1]);for(const l of f){if(l.type!==1||!((r=l==null?void 0:l.message)!=null&&r.authorId)||!p.map[(a=l==null?void 0:l.message)==null?void 0:a.authorId]||p.referenceMap[p.map[(m=l==null?void 0:l.message)==null?void 0:m.authorId]]==="unspecified")continue;const c=p.referenceMap[p.map[l.message.authorId]];if(v(F.name,"isTimestamp",!1)&&l.message.timestamp){l.message.timestamp+=" \u2022 "+c;continue}l.message.opTagText&&(l.message.tagText=l.message.tagText?l.message.tagText+" \u2022 ":""+l.message.opTagText),l.message.opTagText=c,l.message.opTagTextColor=W.processColor(me.opTagTextColor.color),l.message.opTagBackgroundColor=W.processColor(me.opTagBackgroundColor.color)}o[1]=JSON.stringify(f)})},onStop(){V.unpatchAll()},getSettingsPanel(){return t.createElement(Ae,{manifest:F})}};ce(Ve);
