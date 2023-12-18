export const BASE_DIR = "BOOX";
export const DATA_DIR = ".data";

export const backgroundType = {
	IMAGE_FILE: 26,
	PDF_FILE: 27,
	NEW_GRID: 1001,
	NEW_LINE: 1002,
	NEW_MATS: 1003,
	NEW_MUSIC: 1004,
	NEW_ENGLISH: 1005,
	NEW_TABLE: 1006,
	NEW_COLUMN: 1007,
	NEW_LEFT_GRID: 1008,
	NEW_GRID_POINT: 1009,
	NEW_GRID_5_5: 1010,
	NEW_LINE_1_6: 1011,
	NEW_LINE_2_0: 1012,
	NEW_CALENDAR: 1013,
	MC_KINSEY: 1014,
	CORNELL: 1015,
};

export const shapeTypes = {
	SHAPE_CIRCLE: 0,
	SHAPE_RECTANGLE: 1,
	SHAPE_PENCIL_SCRIBBLE: 2,
	SHAPE_OILY_PEN_SCRIBBLE: 3,
	SHAPE_FOUNTAIN_PEN_SCRIBBLE: 4,
	SHAPE_BRUSH_SCRIBBLE: 5,
	SHAPE_TEXT: 6,
	SHAPE_LINE: 7,
	SHAPE_TRIANGLE: 8,
	SHAPE_ANNOTATION: 9,
	SHAPE_TRIANGLE_45: 10,
	SHAPE_TRIANGLE_60: 11,
	SHAPE_TRIANGLE_90: 12,
	SHAPE_FORM_TEXT: 13,
	SHAPE_ERASE_OVERLAY: 14,
	SHAPE_MARKER_SCRIBBLE: 15,
	SHAPE_EDIT_TEXT_SHAPE: 16,
	SHAPE_POLYGON: 17,
	SHAPE_RHOMBUS: 18,
	SHAPE_IMAGE: 19,
	SHAPE_AREA_ERASE: 20,
	SHAPE_NEO_BRUSH: 21,
	SHAPE_CHARCOAL_SCRIBBLE: 22,
	SHAPE_AUDIO: 23,
	SHAPE_REGULAR_POLYGON: 24,
	SHAPE_WAVE_LINE: 25,
	SHAPE_TRAPEZOID: 26,
	SHAPE_REGULAR_HEXAGON: 27,
	SHAPE_ARROW_LINE: 28,
	SHAPE_RICH_TEXT: 29,
	SHAPE_RICH_TEXT_RESOURCE: 30,
	SHAPE_LINK: 33,
	SHAPE_ATTACHMENT: 34,
	SHAPE_FREE: 36,
	SHAPE_FILL: 37,
	SHAPE_TIMESTAMP: 38,
};

export const ICON_NOTE_SYNC = `<?xml version="1.0" encoding="UTF-8"?>
    <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>修改标题备份</title>
        <g id="修改标题备份" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4.54851101,5.00065552 C3.60712526,6.06018758 3.03533962,7.45545284 3.03533962,8.98426579 C3.03533962,12.2979743 5.72163112,14.9842658 9.03533962,14.9842658 L6.66609042,16.6202469 M13.5364467,12.9517477 C14.4693325,11.894204 15.0353396,10.5053339 15.0353396,8.98426579 C15.0353396,5.67055729 12.3490481,2.98426579 9.03533962,2.98426579 L11.3489656,1.23471971 M9.03533962,2.98426579 L10.0018111,5.07916937 M7.65511532,12.7982728 L9.12762476,14.9218454" id="形状" stroke="#5D5D5D" transform="translate(9.035340, 8.927483) rotate(-48.000000) translate(-9.035340, -8.927483) "></path>
        </g>
    </svg>
`
export const ICON_LOGO = `<g id="z" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="编组-15">
            <rect id="矩形" x="0" y="0" width="100" height="100" rx="7"></rect>
            <path d="M34.9470465,8.23001141 C33.0840344,9.06052569 31.4300875,10.1873596 30.0146925,11.5785678 C28.4419613,13.1501557 27.1639996,14.9539486 26.2157796,16.93258 C25.3034954,19.2486407 24.895056,21.4707288 24.9129316,23.7098306 C24.8992775,25.4616889 25.2212411,27.2518082 25.8624131,28.9378807 L26.1107035,29.5231013 C26.3745208,30.0764643 26.6903043,30.5457161 27.1065222,31.0340121 L27.2435464,31.1856537 L14.2040411,31.1885764 C12.2787347,31.147618 10.3639364,31.9731348 9.02690247,33.4525016 C7.7922751,34.5928875 6.99317661,36.4679723 7.01861812,38.4229429 L7.00680223,55.4370015 L11.4210237,53.8732409 C12.473808,53.5002867 13.588552,53.3073238 14.7343263,53.3073238 C20.2135176,53.3073238 24.6552798,57.7500013 24.6552798,63.2303217 C24.6552798,68.7106421 20.2135176,73.1533196 14.7343263,73.1533196 C13.588552,73.1533196 12.473808,72.9603567 11.4210237,72.5874025 L7,71.0212322 L7.02725653,83.8376616 L7.03856347,85.8964458 C7.00624363,87.7808073 7.79650997,89.6454251 9.21402481,90.9739713 C10.4494363,92.2510746 12.3073682,93.022162 14.2400262,92.9982669 L61.0830248,92.9985196 C62.9681216,93.0390474 64.8484415,92.245852 66.1813836,90.8163216 L66.6308508,90.3341947 C67.6227438,89.1440191 68.2066813,87.5155853 68.1745451,85.8317845 L68.1707866,74.8159731 C69.0730885,75.4007524 70.0226673,75.898479 71.0156973,76.3008955 C74.935586,77.8659781 79.3776695,78.1367632 82.8674141,76.6196428 C84.7672604,75.8332485 86.5702258,74.7034465 88.1482526,73.2996551 C89.6626155,71.8685318 90.849092,70.2607387 91.7306107,68.4810463 C92.6252408,66.196953 93.0138171,64.0655663 93,61.9175874 C93,59.3258794 92.6928068,57.4364807 91.637362,55.4389088 C90.6796706,53.4855918 89.2121298,51.7079577 87.3970702,50.3355084 C82.8155153,46.5750081 76.3354492,45.7595075 70.8416587,48.3188945 L70.1643341,48.6723358 C69.5211606,49.0278731 68.9663893,49.3978018 68.3735643,49.8550521 L68.1707866,50.0128884 L68.1751474,38.3604012 C68.2060598,36.4746117 67.4400724,34.6078063 66.0561489,33.2478216 L65.6280276,32.8273507 C64.4247833,31.7599612 62.7461548,31.1328313 61.0077737,31.1698338 L54.3343634,31.1680128 L54.7142796,30.5727179 C55.969682,28.4491919 56.5845741,26.1648188 56.5304638,23.6037897 C56.5516024,21.4620784 56.1426031,19.2369438 55.3260988,17.1481152 C54.3526392,14.808929 53.2908422,12.9508847 51.9295199,11.5944404 C50.7843729,10.4687758 49.4968175,9.52246915 48.0988556,8.77471001 L46.9811272,8.23001141 C43.1383263,6.5899962 38.7898474,6.5899962 34.9470465,8.23001141 Z M43.1196471,13.4270227 L43.8395555,13.6928639 C44.9076268,14.1717851 45.9071175,14.8526131 46.7619969,15.6927298 C47.349354,16.277984 48.0427696,17.4911729 48.6841929,19.030829 C49.1675603,20.2693947 49.4233313,21.6606454 49.4104881,23.0622501 C49.4493908,24.9752192 48.8729608,26.4268186 47.4769008,28.0544334 C46.0604455,29.7416855 45.7546465,32.0574886 46.670548,34.0219748 C47.5844252,35.9821191 49.5489389,37.2375245 51.7117767,37.2476968 L60.6083731,37.2477335 C60.7406838,37.245669 60.7990967,37.2704865 60.838787,37.3135131 C61.0449745,37.521709 61.095511,37.6448502 61.0934573,37.7718933 L61.0930238,51.7616333 C61.0935987,53.9440636 62.3656921,55.9239894 64.3479622,56.8352392 C66.3258749,57.7444859 68.6529489,57.425396 70.3122409,56.016347 L70.9940413,55.4287425 C72.0061912,54.5522439 72.5338798,54.1647575 73.2772154,53.7968036 C76.4067865,52.3401322 80.1835821,52.8153456 82.9102201,55.0509572 C84.0068939,55.8832836 84.8098004,56.8556668 85.3576271,57.9709388 C85.8466337,58.8993846 86,59.8430979 86,61.4792687 C86.0088224,62.8259963 85.7692688,64.1397349 85.2934122,65.37528 C84.8790322,66.1798717 84.15715,67.1579141 83.2829382,67.9851739 C82.3291366,68.8313918 81.1526692,69.5684726 79.8780014,70.0963561 C78.1395714,70.8514299 75.4591289,70.6880627 73.0549891,69.7283739 C72.0780719,69.3325121 71.1580659,68.7717173 70.3470883,68.0745805 C68.6069168,66.6643481 66.3244854,66.3687495 64.3710643,67.2464447 C62.3775567,68.1627161 61.1090843,70.1216787 61.093114,72.2869286 L61.0930238,85.5093972 C61.095187,85.654389 61.0622363,85.7338411 61.0012189,85.7925704 C60.8273669,85.9719039 60.757188,86.0015028 60.6832869,86 L13.573463,85.9992045 C13.4138975,86.0009235 13.3007878,85.9539889 13.2202742,85.8711139 L13.0951324,85.7364457 C13.0368662,85.6621405 13.0237288,85.6142339 13.024553,85.5654341 L13.0176959,79.3240685 L14.1104187,79.3638852 C23.2727785,79.3638852 30.7003388,71.9361574 30.7003388,62.7735908 L30.6773429,61.8924977 C30.2193361,53.1395452 22.9772185,46.1832964 14.1104187,46.1832964 L13,46.2186891 L13.0047331,37.8473243 C13.0032203,37.707204 13.0421811,37.6157994 13.1130196,37.5494782 C13.3569088,37.2968431 13.4309457,37.2649298 13.5090574,37.266562 L29.1323718,37.267286 C31.2722812,37.2694717 33.2297107,36.0475246 34.1652289,34.1193476 C35.1028637,32.1868083 34.8468398,29.8889213 33.5076129,28.2094931 C33.2770645,27.9239477 33.0634298,27.6852314 32.8012843,27.4156496 L31.7092862,26.3215474 C31.5588057,26.1578892 31.500447,26.0736435 31.4805514,26.0209887 C31.1272474,25.0920631 30.9511869,24.1133455 30.9586467,23.1275382 C30.9474249,21.6718916 31.2036104,20.2783866 31.7137004,18.9691418 C32.2406358,17.891639 33.0853489,16.6995784 34.1124239,15.6733331 C34.947729,14.8526131 35.9472197,14.1717851 37.0439092,13.6827011 C38.9485383,12.8704202 41.1209441,12.7801668 43.1196471,13.4270227 Z" id="形状结合" fill="#B4B4B4" fill-rule="nonzero"></path>
        </g>
    </g>`;

export const ICON_AUDIO = `<?xml version="1.0" encoding="UTF-8"?>
    <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com -->
        <title>录音</title>
        <desc>Created with Sketch.</desc>
        <g id="录音" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="luyin" transform="translate(5.000000, 2.500000)" fill="#505F79" fill-rule="nonzero">
                <path d="M9.37500001,6.875 C9.72017798,6.875 10,7.15482203 10,7.5 C10,9.75125 8.076875,11.573125 5.62500001,11.84125 L5.62500001,13.75 L7.8125,13.75 C7.98508898,13.75 8.125,13.889911 8.125,14.0625 L8.125,14.6875 C8.125,14.860089 7.98508898,15 7.8125,15 L2.1875,15 C2.01491102,15 1.875,14.860089 1.875,14.6875 L1.875,14.0625 C1.875,13.889911 2.01491102,13.75 2.1875,13.75 L4.37499999,13.75 L4.37499999,11.84125 C1.923125,11.57375 0,9.75125 0,7.5 C5.28386477e-05,7.1548594 0.279859393,6.87509568 0.624999998,6.87509568 C0.970140604,6.87509568 1.24994716,7.1548594 1.25,7.5 C1.25,9.2025 2.909375,10.625 5,10.625 C7.090625,10.625 8.75,9.2025 8.75,7.5 C8.75,7.15482203 9.02982204,6.875 9.37500001,6.875 Z M5,0 C6.72588984,1.05680273e-16 8.125,1.39911015 8.125,3.125 L8.125,6.875 C8.12499997,8.60088982 6.72588982,9.99999994 5,9.99999994 C3.27411018,9.99999994 1.87500003,8.60088982 1.875,6.875 L1.875,3.125 C1.875,1.39911015 3.27411016,3.1704082e-16 5,0 Z M5,1.25 C4.00715149,1.24994469 3.1863721,2.02386154 3.12812499,3.015 L3.125,3.125 L3.125,6.875 C3.12402194,7.88980914 3.93060439,8.72121986 4.94497696,8.7509996 C5.95934953,8.78077935 6.81331756,7.99811874 6.87187501,6.985 L6.875,6.875 L6.875,3.125 C6.875,2.08946609 6.03553391,1.25 5,1.25 Z" id="Shape"></path>
            </g>
        </g>
    </svg>`;

export const ICON_URLLINK = `<?xml version="1.0" encoding="UTF-8"?>
  <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <title>url link</title>
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="url-link" transform="translate(-866.000000, -363.000000)" stroke="#505F79" stroke-width="1.5">
              <g id="link" transform="translate(866.000000, 363.000000)">
                  <g id="编组" transform="translate(1.020892, 3.000000)">
                      <circle id="椭圆形" cx="8.55738411" cy="7" r="7"></circle>
                      <path d="M1.55738411,9.12132034 C-2.0506184,13.2695973 0.610392305,13.5466455 9.54041621,9.95246493 C18.4704401,6.35828441 20.300692,4.43330682 15.0311718,4.17753217" id="路径-17"></path>
                  </g>
              </g>
          </g>
      </g>
  </svg>`;

export const ICON_PAGELINK = `<?xml version="1.0" encoding="UTF-8"?>
  <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <title>page link</title>
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="page-link" transform="translate(-783.000000, -317.000000)" stroke="#505F79" stroke-width="1.5">
              <g id="link" transform="translate(783.000000, 317.000000)">
                  <g id="编组" transform="translate(10.000000, 10.000000) rotate(-315.000000) translate(-10.000000, -10.000000) translate(6.000000, 1.000000)">
                      <path d="M4,10 C6.209139,10 8,11.790861 8,14 L8,16 C8,17.1045695 7.1045695,18 6,18 L2,18 C0.8954305,18 -2.27238405e-13,17.1045695 -2.27373675e-13,16 L-2.27373675e-13,14 C-2.27644217e-13,11.790861 1.790861,10 4,10 Z" id="矩形"></path>
                      <path d="M4,0 C6.209139,-4.05812251e-16 8,1.790861 8,4 L8,6 C8,7.1045695 7.1045695,8 6,8 L2,8 C0.8954305,8 2.27508946e-13,7.1045695 2.27373675e-13,6 L2.27373675e-13,4 C2.27103134e-13,1.790861 1.790861,4.05812251e-16 4,0 Z" id="矩形备份" transform="translate(4.000000, 4.000000) rotate(-180.000000) translate(-4.000000, -4.000000) "></path>
                      <line x1="4" y1="5.00842771" x2="4" y2="12.9913892" id="直线-14" stroke-linecap="round" stroke-linejoin="round"></line>
                  </g>
              </g>
          </g>
      </g>
  </svg>`;

export const ICON_FILE = `<?xml version="1.0" encoding="UTF-8"?>
  <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <title>切片</title>
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="客户端最小尺寸_笔记标签搜索" transform="translate(-996.000000, -305.000000)" stroke="#505F79" stroke-width="1.5">
              <g id="选择-copy-16备份-2" transform="translate(996.000000, 305.000000)">
                  <path d="M4,1 L13.3543556,1 L13.3543556,1 L18,4.91080733 L18,17 C18,18.1045695 17.1045695,19 16,19 L4,19 C2.8954305,19 2,18.1045695 2,17 L2,3 C2,1.8954305 2.8954305,1 4,1 Z" id="矩形" stroke-linejoin="round"></path>
                  <path d="M12.6574233,1.77142857 L12.6574233,3.77142857 C12.6574233,4.87599807 13.5528538,5.77142857 14.6574233,5.77142857 L17.4574233,5.77142857 L17.4574233,5.77142857" id="路径-25"></path>
                  <line x1="6.5" y1="10.5" x2="13.5" y2="10.5" id="直线" stroke-linecap="round"></line>
                  <line x1="6.5" y1="14.5" x2="11.5" y2="14.5" id="直线备份" stroke-linecap="round"></line>
              </g>
          </g>
      </g>
  </svg>`;

export const ICON_DOCLINK = `<?xml version="1.0" encoding="UTF-8"?>
  <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <title>切片</title>
      <g id="文本编辑" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
          <g id="客户端最小尺寸_编辑器-文本编辑" transform="translate(-555.000000, -882.000000)" stroke="#505F79">
              <g id="编组-3备份" transform="translate(440.000000, 873.000000)">
                  <g id="notes_popup_export备份-2" transform="translate(115.000000, 9.000000)">
                      <g id="编组" transform="translate(3.000000, 3.000000)">
                          <path d="M14,7.16190171 L14,10 C14,12.209139 12.209139,14 10,14 L4,14 C1.790861,14 -1.73547709e-16,12.209139 0,10 L0,4 C-2.705415e-16,1.790861 1.790861,4.05812251e-16 4,0 L7.00226782,0 L7.00226782,0" id="路径"></path>
                      </g>
                      <line x1="7.5" y1="12.5" x2="16.5" y2="3.5" id="直线-19"></line>
                      <polyline id="路径-30" points="13.5209321 3 17 3 17 6.31366517"></polyline>
                  </g>
              </g>
          </g>
      </g>
  </svg>`;

export const ICON_PREV = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="6px" height="14px" viewBox="0 0 6 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com -->
    <title>prev</title>
    <desc>Created with Sketch.</desc>
    <g id="prev" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <path d="M-0.755552112,6.38426127 L2.35222623,8.85309668 C2.71643804,9.14242845 3.23205488,9.14242845 3.59626669,8.85309668 L6.70404503,6.38426127 C7.13648464,6.04072899 7.20855826,5.41167948 6.86502597,4.97923987 C6.67532012,4.74043751 6.3870082,4.60126011 6.0820248,4.60126011 L-0.133531879,4.60126011 C-0.685816629,4.60126011 -1.13353188,5.04897536 -1.13353188,5.60126011 C-1.13353188,5.90624351 -0.994354471,6.19455543 -0.755552112,6.38426127 Z" fill="#595959" transform="translate(2.974246, 6.974246) rotate(-270.000000) translate(-2.974246, -6.974246) "></path>
    </g>
</svg>`;

export const ICON_NEXT = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="6px" height="13px" viewBox="0 0 6 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com -->
    <title>next</title>
    <desc>Created with Sketch.</desc>
    <g id="next" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.699999988">
        <path d="M-0.755552112,5.78300117 L2.35222623,8.25183657 C2.71643804,8.54116835 3.23205488,8.54116835 3.59626669,8.25183657 L6.70404503,5.78300117 C7.13648464,5.43946888 7.20855826,4.81041937 6.86502597,4.37797977 C6.67532012,4.13917741 6.3870082,4 6.0820248,4 L-0.133531879,4 C-0.685816629,4 -1.13353188,4.44771525 -1.13353188,5 C-1.13353188,5.3049834 -0.994354471,5.59329532 -0.755552112,5.78300117 Z" id="next-1" fill="#000000" transform="translate(2.974246, 6.372986) rotate(-90.000000) translate(-2.974246, -6.372986) "></path>
    </g>
</svg>`;

export const ICON_TAG = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="301px" height="70.0007436px" viewBox="0 0 301 70.0007436" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>标签背景@1x</title>
    <g id="标签背景" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <path d="M42.995,0 L2.581,70 L0.000454914683,70.0007436 L0,56.47 L32.603,0 L42.995,0 Z M200.034,0 L159.619,70 L149.227,70 L189.642,0 L200.034,0 Z M111.121,0 L70.707,70 L59.16,70 L99.575,0 L111.121,0 Z M290.1,0 L249.686,70 L239.294,70 L279.708,0 L290.1,0 Z M66.088,0 L25.673,70 L14.126,70 L54.541,0 L66.088,0 Z M245.067,0 L204.652,70 L194.26,70 L234.675,0 L245.067,0 Z M155,0 L114.585,70 L104.193,70 L144.608,0 L155,0 Z M301,39.121 L301,59.12 L294.719,70 L283.172,70 L301,39.121 Z M223.128,0 L182.713,70 L171.167,70 L211.581,0 L223.128,0 Z M133.061,0 L92.647,70 L82.254,70 L122.669,0 L133.061,0 Z M301,1.123 L301,19.121 L271.625,70 L261.233,70 L301,1.123 Z M88.028,0 L47.613,70 L37.221,70 L77.636,0 L88.028,0 Z M268.162,0 L227.747,70 L216.2,70 L256.615,0 L268.162,0 Z M178.095,0 L137.68,70 L126.133,70 L166.548,0 L178.095,0 Z M21.056,0 L0,36.471 L0,18.469 L10.663,0 L21.056,0 Z" id="形状" fill="#C2C2C2"></path>
    </g>
</svg>`;