import React from 'react'
import { View } from "react-native";
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="1000" viewBox="0 0 1000 1000">
<defs>
  <linearGradient id="b" x1="0" x2="1" y1="0" y2="0" gradientTransform="matrix(56.13594 0 0 -56.13594 107 633.61572)" gradientUnits="userSpaceOnUse" spreadMethod="pad">
    <stop offset="0" stop-color="#9b0a22"/>
    <stop offset=".12215293" stop-color="#d5002d"/>
    <stop offset=".234067" stop-color="#d5002d"/>
    <stop offset=".49980185" stop-color="#9b0a22"/>
    <stop offset=".54976" stop-color="#9b0a22"/>
    <stop offset=".68617981" stop-color="#9b0a22"/>
    <stop offset=".862622" stop-color="#d5002d"/>
    <stop offset=".88176333" stop-color="#d5002d"/>
    <stop offset="1" stop-color="#9b0a22"/>
  </linearGradient>
  <clipPath id="a" clipPathUnits="userSpaceOnUse">
    <path d="M0 851h425V0H0Z"/>
  </clipPath>
</defs>
<g clip-path="url(#a)" transform="matrix(4.49747 0 0 -4.49747 -451.21586 3349.2933)">
  <path fill="#003477" d="m193.3179 641.3202-3.26-10.213h6.414zm6.127-19.672-2.042 5.877h-8.277l-1.971-5.877h-4.874l8.317 23.647c.284.12.684.235 1.198.343.514.107 1.069.161 1.666.161.262 0 .555-.025.877-.073.325-.047.641-.149.95-.305.31-.154.603-.375.879-.662.274-.285.493-.681.662-1.182l7.704-21.929zm11.7519.0001h-4.872v16.949c.118.022.262.047.426.072.144.022.309.041.499.052.187.012.415.019.674.019.759 0 1.415-.138 1.972-.412.558-.276.908-.76 1.051-1.451.408.549 1.038 1.057 1.888 1.522.852.465 1.984.7 3.398.7 1.343 0 2.344-.241 3.003-.717.66-.478 1.144-1.04 1.457-1.684.499.62 1.194 1.175 2.077 1.665.884.489 2.007.736 3.37.736.86 0 1.592-.097 2.203-.288.609-.192 1.122-.453 1.541-.788.418-.335.739-.723.966-1.164.227-.442.376-.914.448-1.416.096-.55.162-1.145.199-1.791.036-.644.051-1.278.051-1.9v-10.104h-4.872v9.889c0 .527-.012 1.004-.036 1.434-.021.429-.112.8-.268 1.11-.154.312-.394.55-.717.718-.324.168-.771.249-1.344.249-.62 0-1.212-.142-1.773-.428-.561-.288-.95-.598-1.165-.933.071-.693.109-1.398.109-2.115v-9.924h-4.873v9.889c0 .527-.015 1.016-.037 1.471-.025.452-.121.84-.287 1.164-.17.321-.422.571-.76.752-.337.179-.817.269-1.441.269-.844 0-1.534-.186-2.074-.556-.542-.371-.813-.83-.813-1.379Zm40.0957 1.3627c-.144-.143-.384-.324-.719-.538-.334-.215-.769-.429-1.307-.645-.538-.215-1.193-.399-1.969-.555-.778-.154-1.666-.233-2.672-.233-1.934 0-3.606.311-5.016.932-1.409.621-2.573 1.486-3.492 2.597-.919 1.112-1.596 2.423-2.025 3.942-.431 1.516-.645 3.182-.645 4.997s.232 3.493.698 5.035c.467 1.541 1.165 2.871 2.097 3.995.93 1.122 2.096 2 3.495 2.633 1.394.633 3.039.949 4.925.949.934 0 1.773-.084 2.525-.249.753-.169 1.412-.366 1.972-.591.559-.228 1.026-.467 1.395-.717.371-.251.652-.46.844-.627.214-.191.4-.42.555-.682.154-.264.234-.55.234-.859 0-.478-.179-.956-.538-1.434-.357-.479-.752-.92-1.182-1.325-.287.287-.608.58-.969.878-.356.297-.759.561-1.199.788-.441.226-.944.418-1.504.572-.562.155-1.189.234-1.883.234-1.218 0-2.239-.244-3.062-.735-.825-.49-1.488-1.129-1.989-1.916-.503-.788-.859-1.69-1.075-2.705-.214-1.017-.321-2.048-.321-3.1 0-1.122.107-2.198.321-3.224.216-1.029.585-1.936 1.111-2.724.525-.787 1.212-1.421 2.058-1.898.85-.479 1.906-.717 3.173-.717.668 0 1.285.083 1.847.25.559.168 1.056.372 1.484.61.431.238.807.488 1.129.752.323.263.592.49.808.68.14-.168.308-.37.501-.608.189-.239.371-.49.537-.753.168-.264.309-.525.429-.789.12-.262.18-.501.18-.716 0-.311-.06-.572-.18-.788-.12-.217-.311-.455-.571-.716m13.6501 8.5267c0 .527-.019 1.015-.054 1.47-.036.453-.133.841-.287 1.164-.156.321-.405.572-.751.753-.348.178-.832.268-1.454.268-.882 0-1.641-.185-2.273-.556-.633-.37-.949-.829-.949-1.378v-11.61h-4.873v25.261c0 .023.177.053.538.09.357.035.727.053 1.11.053.381 0 .765-.036 1.145-.107.382-.071.732-.21 1.039-.413.313-.203.561-.489.753-.859.19-.371.288-.853.288-1.453v-7.129c.191.215.428.441.717.681.286.238.632.46 1.037.663.405.201.878.363 1.418.484.533.119 1.149.179 1.842.179 1.695 0 2.95-.335 3.764-1.003.812-.67 1.336-1.554 1.575-2.652.12-.551.199-1.146.235-1.791.034-.645.053-1.278.053-1.9v-10.104h-4.873Zm18.0944-1.576h-.502c-.167 0-.335-.011-.501-.036-.599-.047-1.19-.12-1.775-.214-.585-.097-1.107-.264-1.559-.502-.455-.239-.823-.551-1.11-.932-.287-.383-.431-.872-.431-1.468 0-.671.192-1.237.573-1.704.383-.465 1.028-.698 1.938-.698.452 0 .881.06 1.289.181.405.116.762.273 1.075.464.309.192.553.401.733.628.18.226.27.435.27.627zm4.585-4.155c0-1.889.276-3.262.825-4.121-.429-.167-.832-.287-1.201-.358-.37-.072-.758-.109-1.163-.109-.861 0-1.511.168-1.957.502-.438.334-.719.812-.838 1.433-.526-.549-1.219-1.016-2.08-1.397-.86-.382-1.91-.573-3.152-.573-.646 0-1.29.089-1.934.268-.646.18-1.229.468-1.755.874-.527.406-.957.947-1.292 1.626-.333.679-.501 1.505-.501 2.482 0 1.215.293 2.202.878 2.964s1.32 1.365 2.204 1.804c.882.439 1.837.744 2.866.912 1.027.164 1.97.272 2.83.32.287.023.567.036.841.036h.772v.653c0 .919-.247 1.569-.735 1.955-.489.387-1.284.582-2.382.582-1.028 0-1.94-.168-2.741-.504-.802-.332-1.585-.715-2.347-1.145-.336.405-.605.854-.807 1.343-.203.49-.306.854-.306 1.093 0 .334.187.657.557.968.369.309.879.59 1.522.841.646.252 1.388.455 2.222.609.836.156 1.722.235 2.65.235 1.292 0 2.385-.133 3.281-.395.895-.263 1.622-.67 2.184-1.219.562-.55.963-1.237 1.201-2.06.238-.824.358-1.786.358-2.885Zm8.027-4.1584h-4.874v16.949c.119.022.261.047.427.072.143.022.309.041.497.052.19.012.415.019.675.019.76 0 1.419-.138 1.975-.412.557-.276.907-.76 1.049-1.451.407.549 1.036 1.057 1.887 1.522.851.465 1.983.7 3.399.7 1.343 0 2.344-.241 3.002-.717.66-.478 1.145-1.04 1.459-1.684.5.62 1.193 1.175 2.076 1.665.883.489 2.007.736 3.367.736.863 0 1.597-.097 2.206-.288.609-.192 1.123-.453 1.539-.788.419-.335.741-.723.966-1.164.229-.442.379-.914.45-1.416.095-.55.161-1.145.196-1.791.038-.644.055-1.278.055-1.9v-10.104h-4.873v9.889c0 .527-.011 1.004-.036 1.434-.024.429-.114.8-.268 1.11-.155.312-.392.55-.718.718-.322.168-.768.249-1.344.249-.621 0-1.211-.142-1.772-.428-.562-.288-.949-.598-1.164-.933.069-.693.107-1.398.107-2.115v-9.924h-4.873v9.889c0 .527-.013 1.016-.037 1.471-.023.452-.12.84-.289 1.164-.167.321-.421.571-.756.752-.337.179-.819.269-1.442.269-.844 0-1.536-.186-2.076-.556-.54-.371-.81-.83-.81-1.379Zm-102.7135-8.4539-4.865-13.303h9.699zm8.139-22.146-2.566 6.948h-11.107l-2.565-6.948h-2.229l9.363 24.709c.122.049.279.099.465.148.186.049.39.075.612.075.295 0 .551-.075.763-.223.207-.149.389-.421.538-.819l9.067-23.89zm6.871 15.3452c.151.223.348.47.595.743.248.272.547.526.893.763.345.234.737.426 1.171.576.431.148.909.222 1.429.222.222 0 .483-.02.781-.054.295-.037.568-.1.817-.187.247-.087.459-.217.632-.391.173-.174.261-.396.261-.669 0-.272-.083-.556-.243-.852-.161-.299-.316-.534-.464-.71-.274.274-.584.486-.928.634-.35.148-.805.224-1.376.224-.447 0-.887-.082-1.319-.243-.433-.161-.818-.378-1.152-.65-.335-.273-.599-.583-.797-.93-.199-.347-.3-.705-.3-1.077v-12.744h-2.118v17.352h.152c.492 0 .946-.148 1.353-.447.41-.296.613-.817.613-1.56m9.2173-6.5568c0-1.018.098-1.968.296-2.849.201-.882.522-1.661.973-2.33.445-.671 1.028-1.199 1.752-1.582.718-.387 1.589-.578 2.609-.578.694 0 1.329.094 1.9.279.571.185 1.064.415 1.474.689.41.273.734.572.971.893.235.324.353.636.353.932v9.463c-.15.174-.353.384-.616.633-.262.248-.579.484-.951.708-.373.223-.807.416-1.306.576-.494.162-1.057.243-1.677.243-1.864 0-3.294-.596-4.289-1.788-.992-1.192-1.489-2.955-1.489-5.289m12.446-7.859c0-.793-.024-1.542-.074-2.249-.05-.705-.15-1.38-.299-2.025-.396-1.635-1.233-2.891-2.507-3.77-1.276-.879-3.041-1.319-5.294-1.319-1.316 0-2.453.154-3.419.464-.966.31-1.673.663-2.119 1.059-.222.2-.372.371-.446.519-.072.149-.11.311-.11.485 0 .221.105.463.315.725.209.259.392.452.538.576.348-.398.781-.745 1.3-1.042.421-.274.961-.508 1.617-.706.656-.198 1.419-.297 2.288-.297 3.489 0 5.447 1.412 5.868 4.235.1.621.16 1.246.186 1.877.025.632.038 1.194.038 1.691v.632c-.199-.199-.434-.421-.706-.67-.273-.248-.614-.476-1.023-.686-.408-.212-.883-.391-1.43-.54-.546-.148-1.177-.222-1.895-.222-1.017 0-1.981.167-2.897.501-.918.334-1.723.868-2.416 1.598-.694.731-1.237 1.654-1.635 2.769-.396 1.113-.594 2.452-.594 4.012 0 1.732.245 3.182.745 4.347.495 1.163 1.119 2.1 1.873 2.806.757.705 1.594 1.206 2.51 1.504.916.297 1.795.446 2.638.446.793 0 1.472-.087 2.043-.259.568-.175 1.053-.379 1.448-.615.397-.236.701-.463.913-.687.208-.223.353-.371.426-.444 0 .668.205 1.118.612 1.355.411.234.762.353 1.062.353.047 0 .097-.007.148-.019.047-.013.099-.019.147-.019h.149zm14.4905 8.9171c0 .818-.076 1.59-.223 2.322-.148.73-.408 1.369-.781 1.913-.371.545-.874.978-1.507 1.301-.631.322-1.416.483-2.356.483-1.539 0-2.787-.52-3.755-1.56-.966-1.041-1.474-2.526-1.521-4.459Zm1.673-7.728c0-.223-.145-.483-.429-.782-.285-.296-.686-.587-1.207-.872-.52-.285-1.147-.526-1.876-.724-.732-.198-1.543-.298-2.435-.298-1.189 0-2.285.174-3.289.52-1.001.348-1.869.899-2.6 1.655-.73.755-1.295 1.721-1.691 2.896-.398 1.177-.593 2.585-.593 4.219 0 1.561.216 2.903.65 4.031.432 1.126 1.014 2.049 1.746 2.768.729.719 1.559 1.251 2.488 1.597.93.347 1.888.521 2.881.521 1.212 0 2.255-.211 3.12-.633.867-.421 1.574-.978 2.12-1.671.544-.695.939-1.492 1.187-2.397.248-.903.373-1.838.373-2.805 0-.595-.039-1.226-.112-1.894h-12.187c.023-1.041.154-1.995.389-2.861.238-.868.601-1.611 1.096-2.23.495-.619 1.117-1.096 1.858-1.43.745-.335 1.623-.502 2.639-.502.767 0 1.438.08 2.004.242.571.159 1.062.359 1.469.594.409.235.744.477 1.004.724.261.248.451.459.577.633.247-.274.445-.528.593-.763.149-.234.225-.414.225-.538m5.1249 13.191c.57.594 1.389 1.131 2.453 1.615 1.063.483 2.339.725 3.828.725.891 0 1.658-.106 2.305-.316.641-.21 1.187-.495 1.633-.855.443-.358.8-.767 1.058-1.227.259-.457.439-.92.539-1.392.123-.521.205-1.059.242-1.616.037-.558.055-1.121.055-1.691v-10.553h-2.117v10.578c0 .496-.024.992-.075 1.49-.05.495-.136.93-.262 1.304-.472 1.588-1.875 2.382-4.214 2.382-.522 0-1.035-.055-1.547-.167-.508-.112-.99-.261-1.437-.446-.448-.188-.858-.405-1.23-.653-.373-.249-.671-.496-.894-.745-.201-.223-.299-.534-.299-.931v-12.812h-2.119v17.353h.148c.512 0 .96-.137 1.351-.408.389-.273.582-.818.582-1.635m22.8511 2.0427v-1.708h-5.796v-10.889c0-1.139.215-2.011.65-2.619.433-.607 1.122-.91 2.062-.91.495 0 .95.086 1.357.259.409.175.749.36 1.021.557.323.249.606.522.854.819.346-.346.577-.612.689-.799.111-.185.166-.34.166-.464 0-.149-.098-.34-.296-.576-.2-.235-.484-.472-.855-.706-.373-.236-.817-.44-1.339-.613-.519-.173-1.114-.261-1.782-.261-1.214 0-2.162.236-2.843.706-.681.472-1.16 1.103-1.429 1.894-.149.448-.248.93-.297 1.45-.051.52-.076 1.065-.076 1.635v17.536h.111c.05 0 .087.009.113.02.023.014.061.019.112.019.149 0 .322-.019.52-.055.194-.037.39-.125.575-.261.185-.135.346-.328.483-.577.136-.248.204-.58.204-1.002v-3.455Zm5.5722-17.5386c-.592 0-1.059.111-1.393.335-.333.223-.581.507-.743.854-.161.348-.259.75-.297 1.208-.038.458-.056.935-.056 1.43v13.712h.112c.496 0 .953-.132 1.374-.391.421-.262.631-.775.631-1.541v-11.892c0-.544.04-.989.114-1.336.071-.347.184-.62.334-.817.147-.199.341-.341.577-.428.234-.086.524-.142.871-.168v-.78c-.274-.075-.532-.123-.78-.148-.249-.025-.494-.038-.744-.038m.076 22.109c0-.472-.157-.874-.466-1.208-.309-.334-.688-.501-1.133-.501-.447 0-.824.167-1.131.501-.313.334-.467.736-.467 1.208 0 .47.154.872.467 1.207.307.333.684.501 1.131.501.445 0 .824-.168 1.133-.501.309-.335.466-.737.466-1.207m6.3167-6.6131c.568.594 1.385 1.131 2.451 1.615 1.065.483 2.341.725 3.825.725.894 0 1.661-.106 2.305-.316.645-.21 1.189-.495 1.637-.855.444-.358.798-.767 1.058-1.227.259-.457.438-.92.538-1.392.124-.521.207-1.059.241-1.616.039-.558.057-1.121.057-1.691v-10.553h-2.119v10.578c0 .496-.027.992-.076 1.49-.048.495-.135.93-.259 1.304-.473 1.588-1.877 2.382-4.213 2.382-.522 0-1.038-.055-1.551-.167-.509-.112-.986-.261-1.435-.446-.447-.188-.858-.405-1.23-.653-.373-.249-.67-.496-.895-.745-.199-.223-.298-.534-.298-.931v-12.812h-2.118v17.353h.149c.51 0 .958-.137 1.35-.408.386-.273.583-.818.583-1.635m25.8583-6.058c-.148.026-.302.038-.462.038h-.498c-.964 0-1.932-.057-2.907-.166-.974-.112-1.861-.333-2.664-.666-.803-.334-1.45-.789-1.941-1.369-.495-.58-.742-1.336-.742-2.274 0-.419.057-.831.166-1.239.112-.407.302-.764.576-1.072.271-.308.636-.561 1.09-.758.456-.198 1.043-.297 1.758-.297.766 0 1.487.113 2.165.333.679.223 1.276.493 1.794.815.518.319.927.646 1.223.979.294.333.442.61.442.833Zm4.162-9.252c-.446-.123-.891-.186-1.339-.186-.74 0-1.385.18-1.929.539-.546.359-.843.959-.894 1.803-.717-.719-1.567-1.314-2.544-1.784-.981-.469-2.136-.706-3.474-.706-.545 0-1.141.07-1.785.205-.645.136-1.238.39-1.782.762-.545.37-.997.885-1.357 1.541-.358.657-.538 1.505-.538 2.545 0 1.264.333 2.298 1.003 3.104.668.803 1.499 1.429 2.489 1.876.991.445 2.055.749 3.196.909 1.14.162 2.169.243 3.083.243.3 0 .583-.007.855-.019.273-.013.544-.032.818-.056v.899c0 .598-.062 1.153-.186 1.664-.123.512-.338.955-.646 1.33-.311.374-.744.667-1.296.879-.556.212-1.277.318-2.165.318-1.184 0-2.208-.161-3.071-.482-.864-.324-1.541-.681-2.036-1.078h-.336c-.344.494-.519.903-.519 1.226 0 .198.094.377.277.534.187.158.416.309.688.456.642.34 1.446.611 2.41.819.96.206 1.885.309 2.775.309 1.211 0 2.217-.137 3.019-.409.804-.273 1.442-.676 1.926-1.208.482-.532.821-1.189 1.018-1.968.198-.781.298-1.692.298-2.731v-7.432c0-.694.047-1.238.148-1.634.098-.398.236-.702.408-.911.173-.211.383-.346.632-.409.246-.063.533-.106.854-.13z"/>
</g>
<path fill="url(#b)" d="M109.988 647.8c-3.38-8.964-5.982-20.752 4.356-29.483 7.711-6.511 19.931-6.815 31.398-7.024 0 0 1.026-.007 1.504-.007 4.068 0 10.99-.038 15.89-4.072-2.406 7.149-6.297 12.006-16.126 17.626-1.802 1.029-17.923 8.296-18.806 8.726-1.446.729-3.072 1.7-4.188 2.413-3.265 2.082-5.482 4.396-7.18 8.045-1.604 3.445-2.889 9.401-1.128 15.879l-.142.115c-.532-.895-4.942-10.534-5.578-12.218" transform="matrix(4.49747 0 0 -4.49747 -451.21586 3349.2933)"/>
<path fill="#003477" d="M244.57441694 544.82857067c-51.90531512-123.52754398-115.76940616-273.82853402-115.76940616-273.82853402h-12.59741683L91.85828487 328.3832717s28.2351242 70.03462152 59.2316957 146.72100295c3.0942602 7.65469599 6.56630796 14.21650647 12.46699017 20.11718868 3.06727536 3.06277789 12.56593453 7.70866564 20.3330673 11.27965777 33.20932734 15.26441725 51.30715145 29.69230486 60.6843789 38.32744957m57.11068828 121.63680708c-11.14023616-7.49728449-16.93297906-28.7658258-22.43788381-34.65751306-17.37822872-18.56556112-67.75440363-15.0080614-70.04811394-15.0395437 4.86176636 11.59897823 10.45212307 25.88294676 12.08470511 32.013 1.19632734 4.4524965 1.24579952 7.31288818 1.06590068 8.98594746-.90399171 8.31582425-3.56649467 10.775941-9.3547401 14.34693313-5.99063164 3.69692133-23.0810222 4.89774614-41.52515159 4.89774614v14.05909497h162.54310664v-14.05909497c-12.6963612-.78705746-24.3762939-5.19907671-32.32782299-10.54656997"/>
</svg>
`;

const Logo = ({width="50%", height="50%"}) => <View style={{flex:1, flexDirection:"row", marginBottom:-200}}>
    <SvgXml xml={xml}  width={width} height={height}/>
    </View>;

export default Logo