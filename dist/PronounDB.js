function D(...e){return window.enmity.modules.getByProps(...e)}window.enmity.modules.common;function me(e){window.enmity.plugins.registerPlugin(e)}function ce(e){return window.enmity.patcher.create(e)}const s=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const t=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const X=window.enmity.modules.common.Toasts,O=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const I=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale;const de=window.enmity.modules.common.Profiles;window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function Q(e,o,n){window.enmity.settings.set(e,o,n)}function T(e,o,n){return window.enmity.settings.getBoolean(e,o,n)}function d(e){return window.enmity.assets.getIDByName(e)}var S={Failed:d("Small"),Delete:d("ic_message_delete"),Copy:d("toast_copy_link"),Open:d("ic_leave_stage"),Clipboard:d("pending-alert"),Clock:d("clock"),Pronoun:d("ic_profile_badge_guild_booster_lvl9"),Settings:{Toasts:{Settings:d("ic_selection_checked_24px"),Failed:d("ic_close_circle_24px")},Initial:d("coffee"),Update:d("discover"),Locale:d("ic_locale_24px"),External:d("ic_raised_hand_list"),Edit:d("ic_edit_24px")}};const ue=(e=.1)=>({shadowColor:"#000",shadowOffset:{width:1,height:4},shadowOpacity:e,shadowRadius:4.65,elevation:8}),pe=(e,o)=>{X.open({content:o=="clipboard"?`Copied ${e} to clipboard.`:e,source:o=="clipboard"?S.Clipboard:S.Settings.Initial})};var R={shadow:ue,displayToast:pe},b="PronounDB",_="1.2.1",he="stable",ge="Displays a Pronoun from PronounDB next to your name in the chat :3",ye=[{name:"Acquite<3",id:"581573474296791211",profile:"https://github.com/acquitelol"}],A={download:"https://raw.githubusercontent.com/acquitelol/enmity-pronoun-db/main/dist/PronounDB.js",repo:"https://github.com/acquitelol/enmity-pronoun-db",pronoundb:"https://pronoundb.org/",build:"patch-1.4.56",hash:"fa93bf8c"},we="#ff91ff",L={name:b,version:_,release:he,description:ge,authors:ye,plugin:A,color:we},B=(e,o,n,l,a)=>{try{return e(...o)}catch(m){console.warn(`[${n}] The following error happened when trying to ${l} ${a!=null?a:"unspecificied label"}: ${m}`);return}};const J=(e,o,n,l)=>B(()=>{if(e){e.length++,n++;for(let a=e.length-1;a>=n;a--)e[a]=e[a-1];return e[n-1]=o,e.length}},[e,o,n],b,"insert an item at",l),fe=(e,o,n)=>B(()=>{let l=[];for(let a=0;a<e.length;a++)J(l,o(e[a],a,e),l.length);return l},[e,o],b,"map an array at",n);var Z={mapItem:fe,insertItem:J};const{native:F}=window.enmity;function Te(){F.reload()}const be=F.version;F.build,F.device,F.version;async function ve(){await B(async function(){const e=`${A.download}?${Math.floor(Math.random()*1001)}.js`,o=await(await fetch(e)).text(),n=o.match(/\d+\.\d+\.\d+/g),l=o.match(/hash:"(.*?)"/);if(!n&&!l)return Se(b,[_,A.build]);const a=n&&n[0],m=l&&l[1];return a&&a!=_?ee(e,a,"version"):m&&m!=A.hash?ee(e,m,"build"):Ee(b,[_,A.hash])},[A],b,"checking if latest version at","the async check for updates callback")}const ee=(e,o,n)=>{O.show({title:"Update found",body:`A newer ${n} is available for ${b}. ${n=="build"?`
The version will remain at ${_}, but the build will update to ${o}.`:""}
Would you like to install ${n} \`${o}\` now?`,confirmText:"Update",cancelText:"Not now",onConfirm:()=>Re(e,o,n)})},Ee=(e,[o,n])=>{console.log(`[${e}] Plugin is on the latest update, which is version ${o} and build ${n}`),O.show({title:"Already on latest",body:`${e} is already updated to the latest version.
Version: \`${o}\`
Build: \`${n}\``,confirmText:"Okay"})},Se=(e,[o,n])=>{console.log(`[${e}] Plugin failed to update to the latest version and build, remaining at ${o} and ${n}`),O.show({title:"Failed",body:`${e} to find a new version or build.
The current versions will remain as follows:
Version: \`${o}\`
Build: \`${n}\``,confirmText:"Okay"})};async function Re(e,o,n){await B(async function(){window.enmity.plugins.installPlugin(e,({data:l})=>{l=="installed_plugin"||l=="overridden_plugin"?O.show({title:`Updated ${b}`,body:`Successfully updated to ${n} \`${o}\`. 
Would you like to reload Discord now?`,confirmText:"Reload",cancelText:"Not now",onConfirm:()=>Te()}):console.log(`[${b}] Plugin failed to update to ${n} ${o}.`)})},[e,o,n],b,"installing plugin at","new version available")}var Ce={checkForUpdates:ve},u={map:{},queue:[],fetching:!1,referenceMap:{hh:"he/him",hi:"he/it",hs:"he/she",ht:"he/they",ih:"it/him",ii:"it/its",is:"it/she",it:"it/they",shh:"she/he",sh:"she/her",si:"she/it",st:"she/they",th:"they/he",ti:"they/it",ts:"they/she",tt:"they/them",any:"any",other:"other",ask:"ask",avoid:"avoid pronouns, use name",unspecified:"unspecified"},async updateQueuedPronouns(){if(this.queue.length<=0||this.fetching)return;const e=this.queue.splice(0,49),o=a=>this.queue.length<=0?a:this.map[a]?o(this.queue.shift()):a;for(const a of e)this.map[a]&&(e[a]=o(a));this.fetching=!0;const n=await(await fetch(`https://pronoundb.org/api/v1/lookup-bulk?platform=discord&ids=${e.join(",")}`,{method:"GET",headers:{Accept:"application/json","X-PronounDB-Source":"Enmity"}})).json(),l=Object.fromEntries(Object.entries(n).filter(([a,m])=>!isNaN(+a)));Object.assign(this.map,l),this.fetching=!1,this.queue.length>0&&this.updateQueuedPronouns()}};const{components:i}=window.enmity;i.Alert,i.Button,i.FlatList;const V=i.Image;i.ImageBackground,i.KeyboardAvoidingView,i.Modal,i.Pressable,i.RefreshControl;const xe=i.ScrollView;i.SectionList,i.StatusBar,i.StyleSheet,i.Switch;const v=i.Text;i.TextInput,i.TouchableHighlight;const M=i.TouchableOpacity;i.TouchableWithoutFeedback,i.Touchable;const p=i.View;i.VirtualizedList,i.Form,i.FormArrow,i.FormCTA,i.FormCTAButton,i.FormCardSection,i.FormCheckbox;const Y=i.FormDivider;i.FormHint,i.FormIcon,i.FormInput,i.FormLabel,i.FormRadio;const h=i.FormRow;i.FormSection,i.FormSelect,i.FormSubLabel;const te=i.FormSwitch;i.FormTernaryCheckBox,i.FormText,i.FormTextColors,i.FormTextSizes;var oe,ne;const Pe=(ne=(oe=D("View","Text"))==null?void 0:oe.Dimensions)==null?void 0:ne.get("window").width;var ie=({style:e,source:o})=>{const[n,l]=t.useState({width:0,height:0}),[a,m]=t.useState(0),f=()=>{const r=C=>typeof C=="string"?parseInt(C.replace("%",""))*Pe/100:C,c=r(e.width);if(!e.maxWidth)return c;const E=r(e.maxWidth);return c>E?E:c};return t.useEffect(()=>{V.getSize(o,(r,c)=>{l({width:r,height:c})},r=>{console.error(`[${L.name}] ${r} when fetching ${o}`)}),m(f())},[]),t.createElement(V,{style:[...Array.isArray(e)?e:[e],{height:a*(n.height/n.width)}],source:{uri:o},resizeMode:"stretch"})};const{Animated:N}=window.enmity.modules.common.Components.General,ae=D("transitionToGuild"),H=D("getUser","getCurrentUser"),g=I.createThemedStyleSheet({container:{marginTop:25,marginLeft:"5%",marginBottom:-15,flexDirection:"row"},textContainer:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap",...R.shadow()},image:{width:75,height:75,borderRadius:10,...R.shadow()},mainText:{opacity:.975,letterSpacing:.25},header:{color:s.ThemeColorMap.HEADER_PRIMARY,fontFamily:s.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},subHeader:{color:s.ThemeColorMap.HEADER_SECONDARY,fontSize:12.75}});var De=({name:e,version:o,plugin:n,authors:l})=>{var a,m;const f=t.useRef(new N.Value(1)).current,r=()=>N.spring(f,{toValue:1.1,duration:10,useNativeDriver:!0}).start(),c=()=>N.spring(f,{toValue:1,duration:250,useNativeDriver:!0}).start(),E=()=>de.showUserProfile({userId:H.getCurrentUser().id}),C={transform:[{scale:f}]};return t.createElement(t.Fragment,null,t.createElement(p,{style:g.container},t.createElement(M,{onPress:E,onPressIn:r,onPressOut:c},t.createElement(N.View,{style:C},t.createElement(V,{style:[g.image],source:{uri:(m=(a=H==null?void 0:H.getCurrentUser())==null?void 0:a.getAvatarURL())==null?void 0:m.replace("webp","png")}}))),t.createElement(p,{style:g.textContainer},t.createElement(M,{onPress:()=>ae.openURL(n.repo)},t.createElement(v,{style:[g.mainText,g.header]},e)),t.createElement(p,{style:{flexDirection:"row"}},t.createElement(v,{style:[g.mainText,g.subHeader]},"A project by"),Z.mapItem(l,(y,x,P)=>t.createElement(M,{onPress:()=>ae.openURL(y.profile)},t.createElement(v,{style:[g.mainText,g.subHeader,{paddingLeft:4,fontFamily:s.Fonts.DISPLAY_BOLD,flexDirection:"row"}]},y.name,x<P.length-1?",":null)))),t.createElement(p,null,t.createElement(M,{style:{flexDirection:"row"}},t.createElement(v,{style:[g.mainText,g.subHeader]},"Version:"),t.createElement(v,{style:[g.mainText,g.subHeader,{paddingLeft:4,fontFamily:s.Fonts.DISPLAY_BOLD}]},o))))))};const re=I.createThemedStyleSheet({text:{color:s.ThemeColorMap.HEADER_SECONDARY,paddingLeft:"5.5%",paddingRight:10,marginBottom:10,letterSpacing:.25,fontFamily:s.Fonts.PRIMARY_BOLD,fontSize:12}});var G=({label:e,children:o,style:n})=>t.createElement(p,{style:[n,{marginTop:10}]},t.createElement(v,{style:[re.text,re.optionText]},e.toUpperCase()),o);const le=D("transitionToGuild"),k=parseInt(be.split(".")[0])>163?15:0,w=I.createThemedStyleSheet({icon:{color:s.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:s.ThemeColorMap.TEXT_MUTED,fontFamily:s.Fonts.PRIMARY_MEDIUM},container:{width:"90%",marginLeft:"5%",borderRadius:10,backgroundColor:s.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,...R.shadow()},subheaderText:{color:s.ThemeColorMap.HEADER_SECONDARY,textAlign:"center",margin:10,marginBottom:50,letterSpacing:.25,fontFamily:s.Fonts.PRIMARY_BOLD,fontSize:14},image:{width:"100%",maxWidth:350,borderRadius:10}});var $e=({manifest:e})=>{const[o,n]=t.useState(T(e.name,"isTimestamp",!1)),[l,a]=t.useState(T(e.name,"isRole",!0));return t.createElement(xe,null,t.createElement(De,{name:e.name,version:e.version,plugin:e.plugin,authors:e.authors}),t.createElement(p,{style:{marginTop:20}},t.createElement(G,{label:"Preferences"},t.createElement(p,{style:[w.container]},t.createElement(h,{label:"Timestamps",subLabel:"Use Timestamps instead of OP Tag for the pronoun in the chat area.",onLongPress:()=>R.displayToast(`By default, ${e.name} will use the OP tag to display pronouns. Toggling this option will always use Timestamps instead of OP tag for pronouns.`,"tooltip"),leading:t.createElement(h.Icon,{style:w.icon,source:S.Settings.Locale}),trailing:t.createElement(te,{value:T(e.name,"isTimestamp",!1),style:{marginLeft:-k},onValueChange:()=>{Q(e.name,"isTimestamp",!T(e.name,"isTimestamp",!1)),n(T(e.name,"isTimestamp",!1))}})}),t.createElement(Y,null),t.createElement(h,{label:"Roles",subLabel:"Show the pronoun styled as a role instead of plain text inside of profiles.",onLongPress:()=>R.displayToast(`With this option enabled, ${e.name} will style pronouns as roles in profiles. Otherwise, it will style them as plain text.`,"tooltip"),leading:t.createElement(h.Icon,{style:w.icon,source:S.Settings.Edit}),trailing:t.createElement(te,{value:T(e.name,"isRole",!0),style:{marginLeft:-k},onValueChange:()=>{Q(e.name,"isRole",!T(e.name,"isRole",!0)),a(T(e.name,"isRole",!0))}})}))),t.createElement(G,{label:"Previews"},t.createElement(p,{style:{...w.container,maxWidth:350}},t.createElement(ie,{style:w.image,source:`https://cdn.discordapp.com/attachments/${o?"1011346757214543875/1075007230337896448/pronoun-timestamp.png":"1011346757214543875/1075007230107193374/pronoun-tag.png"}`})),t.createElement(p,{style:{...w.container,marginTop:10,maxWidth:350}},t.createElement(ie,{style:w.image,source:`https://cdn.discordapp.com/attachments/${l?"1011346757214543875/1075007778399199282/profile-role.png":"1011346757214543875/1075007778067841044/profile-plain.png"}`}))),t.createElement(G,{label:"Source"},t.createElement(p,{style:w.container},t.createElement(h,{label:"Check for Updates",subLabel:`Search for any ${e.name} updates and notify you if an update is available.`,onLongPress:()=>R.displayToast(`Search GitHub for any new version or build of ${e.name} and prompts you to update, and then prompts you to restart Enmity afterwards.`,"tooltip"),leading:t.createElement(h.Icon,{style:w.icon,source:S.Settings.Update}),trailing:()=>t.createElement(h.Arrow,{style:{marginLeft:-k}}),onPress:async function(){await Ce.checkForUpdates()}}),t.createElement(Y,null),t.createElement(h,{label:"Source",subLabel:`Open the repository of ${e.name} externally.`,onLongPress:()=>R.displayToast(`Opens the repository of ${e.name} on GitHub in an external page to view any source code of the plugin.`,"tooltip"),leading:t.createElement(h.Icon,{style:w.icon,source:S.Open}),trailing:()=>t.createElement(h.Arrow,null),onPress:()=>{le.openURL(e.plugin.repo)}}),t.createElement(Y,null),t.createElement(h,{label:"PronounDB",subLabel:`Open the ${e.name} website externally at \`https://pronoundb.org\`.`,onLongPress:()=>R.displayToast("Opens the PronounDB website in an external page which allows you to link your Discord account to PronounDB.","tooltip"),leading:t.createElement(h.Icon,{style:w.icon,source:S.Settings.External}),trailing:()=>t.createElement(h.Arrow,{style:{marginLeft:-k}}),onPress:()=>{le.openURL(e.plugin.pronoundb)}})))),t.createElement(v,{style:w.subheaderText},`Build: (${e.plugin.hash}) Release: (${e.release})`))};function Ae(e,o,n){return window.enmity.utilities.findInReactTree(e,o,n)}const $=I.createThemedStyleSheet({container:{marginTop:12,marginLeft:12,alignSelf:"flex-start"},eyebrow:{textTransform:"uppercase",fontSize:12,lineHeight:16,fontFamily:s.Fonts.PRIMARY_BOLD,color:s.ThemeColorMap.TEXT_NORMAL,marginBottom:10},innerContainer:{backgroundColor:s.ThemeColorMap.BACKGROUND_MOBILE_PRIMARY,borderRadius:8,borderWidth:1,borderColor:s.ThemeColorMap.HEADER_PRIMARY,overflow:"hidden",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},circle:{width:12,height:12,borderRadius:12/2,backgroundColor:s.ThemeColorMap.HEADER_PRIMARY,marginLeft:8,marginRight:6},content:{fontSize:14,paddingRight:8,paddingTop:8,paddingBottom:8},text:{fontFamily:s.Fonts.DISPLAY_NORMAL,color:s.ThemeColorMap.TEXT_NORMAL}});var Ie=({pronoun:e})=>t.createElement(p,{style:$.container},t.createElement(v,{style:$.eyebrow},"Pronouns"),t.createElement(M,{onPress:()=>X.open({content:e,source:S.Pronoun})},T(L.name,"isRole",!0)?t.createElement(p,{style:$.innerContainer},t.createElement(p,{style:$.circle}),t.createElement(v,{style:[$.text,$.content]},e)):t.createElement(v,{style:[$.text,{fontSize:16}]},e)));const U=ce("pronoun-db"),_e=D("PRIMARY_INFO_TOP_OFFSET","SECONDARY_INFO_TOP_MARGIN","SIDE_PADDING"),Le=D("getUser"),q=D("View"),{DCDChatManager:Fe}=q.NativeModules,se=I.createThemedStyleSheet({opTagBackgroundColor:{color:s.ThemeColorMap.HEADER_PRIMARY},opTagTextColor:{color:s.ThemeColorMap.BACKGROUND_PRIMARY},mention:{color:s.ThemeColorMap.BACKGROUND_MENTIONED_HOVER}}),Me={...L,onStart(){U.before(Le,"getUser",(e,o,n)=>{const l=o[0];u.map[l]||Z.insertItem(u.queue,l,u.queue.length,"user id pronoun queue"),u.updateQueuedPronouns()}),U.after(_e.default,"type",(e,o,n)=>{var l,a,m,f,r;const c=(a=(l=Ae(n,y=>{var x,P,W;return((x=y==null?void 0:y.props)==null?void 0:x.children.find(z=>{var j,K;return typeof((K=(j=z==null?void 0:z.props)==null?void 0:j.displayProfile)==null?void 0:K.userId)=="string"}))&&((P=y==null?void 0:y.type)==null?void 0:P.displayName)==="View"&&Array.isArray((W=y==null?void 0:y.props)==null?void 0:W.style)}))==null?void 0:l.props)==null?void 0:a.children;if(!c)return n;const{userId:E}=(r=(f=(m=c==null?void 0:c.find(y=>{var x,P;return typeof((P=(x=y==null?void 0:y.props)==null?void 0:x.displayProfile)==null?void 0:P.userId)=="string"}))==null?void 0:m.props)==null?void 0:f.displayProfile)!=null?r:{};if(!E||!u.map[E]||u.referenceMap[u.map[E]]==="unspecified")return n;const C=u.referenceMap[u.map[E]];c.unshift(t.createElement(Ie,{pronoun:C}))}),U.before(Fe,"updateRows",(e,o,n)=>{var l,a,m;const f=JSON.parse(o[1]);for(const r of f){if(r.type===1&&(r.message.shouldShowRoleDot=!0,r.message.shouldShowRoleOnName=!0),r.type!==1||!((l=r==null?void 0:r.message)!=null&&l.authorId)||!u.map[(a=r==null?void 0:r.message)==null?void 0:a.authorId]||u.referenceMap[u.map[(m=r==null?void 0:r.message)==null?void 0:m.authorId]]==="unspecified")continue;const c=u.referenceMap[u.map[r.message.authorId]];if(T(L.name,"isTimestamp",!1)&&r.message.timestamp){r.message.timestamp+=" \u2022 "+c;continue}r.message.opTagText&&(r.message.tagText=r.message.tagText?r.message.tagText+" \u2022 ":""+r.message.opTagText),r.message.opTagText=c,r.message.opTagTextColor=q.processColor(se.opTagTextColor.color),r.message.opTagBackgroundColor=q.processColor(se.opTagBackgroundColor.color)}o[1]=JSON.stringify(f)})},onStop(){U.unpatchAll()},getSettingsPanel(){return t.createElement($e,{manifest:L})}};me(Me);
