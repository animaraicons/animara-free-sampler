/*! Animara sampler card v1.0.0 | 12 free animated device icons for Home Assistant
 *
 * MIT License
 *
 * Copyright (c) 2026 Animara
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
 * to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions
 * of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
 * THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
 * CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 * The full pack with every icon is a separate, paid product and is not covered by this license.
 */
const VERSION = '1.0.0';
const EDITION = 'sampler';   // 'paid' (full pack, artwork encrypted), 'sampler' (free, open source) or 'dev' (local, not for sale)
const ICONS = {bulb:{n:'Light bulb',c:'lighting',d:'A classic clear bulb; when on, the glass fills with warm light and the filament glows.',s:[['off',''],['on','is-on']],v:'2.8 9.2 122.5 122.5',b:'<defs><radialGradient id="ID-glass" cx=".36" cy=".3" r=".85"><stop offset="0" stop-color="#ffffff"/><stop offset=".55" stop-color="#eef1f4"/><stop offset="1" stop-color="#c3cad2"/><\/radialGradient><radialGradient id="ID-lit" cx=".5" cy=".5" r=".62"><stop offset="0" stop-color="#ffffff"/><stop offset=".3" stop-color="#fffaf0"/><stop offset=".62" style="stop-color:var(--mh-color,#ffb13b)" stop-opacity=".85"/><stop offset="1" style="stop-color:var(--mh-color,#ffb13b)"/><\/radialGradient><radialGradient id="ID-halo"><stop offset="0" style="stop-color:var(--mh-color,#ffb13b)" stop-opacity=".75"/><stop offset=".5" style="stop-color:var(--mh-color,#ffb13b)" stop-opacity=".3"/><stop offset="1" style="stop-color:var(--mh-color,#ffb13b)" stop-opacity="0"/><\/radialGradient><linearGradient id="ID-metal" x1="0" x2="1"><stop offset="0" stop-color="#8a939c"/><stop offset=".28" stop-color="#f1f3f5"/><stop offset=".55" stop-color="#b8bfc6"/><stop offset=".82" stop-color="#7b848d"/><stop offset="1" stop-color="#a7aeb6"/><\/linearGradient><\/defs><g class="bl-halo"><circle cx="64" cy="54" r="58" fill="url(#ID-halo)"/><circle cx="64" cy="52" r="40" fill="url(#ID-halo)"/><\/g><path d="M50 90C50 78 34 73 34 52A30 30 0 0 1 94 52C94 73 78 78 78 90Z" fill="url(#ID-glass)" stroke="#aeb6bf" stroke-width="1.2"/><path class="bl-lit" d="M50 90C50 78 34 73 34 52A30 30 0 0 1 94 52C94 73 78 78 78 90Z" fill="url(#ID-lit)"/><path d="M58 90V74l3-4h6l3 4v16" fill="none" stroke="#a9b1ba" stroke-width="1.3" stroke-linejoin="round"/><path class="bl-wire" d="M58 74V64M70 74V64" stroke="#9aa3ad" stroke-width="1.3"/><path class="bl-glowfil" d="M58 64C56 46 72 46 70 64" fill="none" stroke-width="7" stroke-linecap="round"/><path class="bl-fil" d="M58 64C56 46 72 46 70 64" fill="none" stroke="#9099a3" stroke-width="2.4" stroke-linecap="round"/><path d="M43 44q5-14 19-17" fill="none" stroke="#fff" stroke-opacity=".85" stroke-width="3.2" stroke-linecap="round"/><path d="M48 89h32v7H48z" fill="url(#ID-metal)" stroke="#8d969f" stroke-width=".8"/><rect x="46.5" y="96" width="35" height="6.5" rx="3.2" fill="url(#ID-metal)" stroke="#87909a" stroke-width=".8"/><rect x="47.5" y="102.5" width="33" height="6.5" rx="3.2" fill="url(#ID-metal)" stroke="#87909a" stroke-width=".8"/><rect x="49" y="109" width="30" height="5.5" rx="2.7" fill="url(#ID-metal)" stroke="#87909a" stroke-width=".8"/><path d="M54 114.5h20l-3.5 5h-13z" fill="#3a424b"/>',k:'.mh-bulb .bl-halo{transform-box:view-box;transform-origin:64px 52px}.mh-bulb .bl-halo,.mh-bulb .bl-lit,.mh-bulb .bl-glowfil{opacity:0;transition:opacity .5s}.mh-bulb .bl-glowfil{stroke:var(--mh-color,#ffb13b)}.mh-bulb.is-on .bl-lit{opacity:1}.mh-bulb.is-on .bl-fil{stroke:#fff}.mh-bulb.is-on .bl-wire{stroke:#fff3d6}.mh-bulb.is-on .bl-glowfil{opacity:.9;animation:mh-breathe 2.8s ease-in-out infinite}.mh-bulb.is-on .bl-halo{opacity:1;animation:mh-bulb-halo 2.8s ease-in-out infinite}@keyframes mh-bulb-halo{0%,100%{opacity:.5;transform:scale(.86)}50%{opacity:1;transform:scale(1.04)}}.mh-bulb .bl-halo,.mh-bulb .bl-lit,.mh-bulb .bl-glowfil{fill-opacity:calc(.22 + .78 * var(--mh-level,1));stroke-opacity:calc(.22 + .78 * var(--mh-level,1))}',f:['mh-breathe']},smart_plug:{n:'Smart plug',c:'lighting',d:'A smart plug with a cord plugged in; when it is on, the LED ring around the socket and the power button glow green.',s:[['off',''],['on','is-on']],v:'0.8 -4.2 137.5 137.5',b:'<defs><linearGradient id="ID-face" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".6" stop-color="#f1f3f5"/><stop offset="1" stop-color="#d9dee3"/><\/linearGradient><linearGradient id="ID-side" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#cfd5dc"/><stop offset="1" stop-color="#a9b1ba"/><\/linearGradient><radialGradient id="ID-well" cx=".5" cy=".35" r=".65"><stop offset="0" stop-color="#e7eaee"/><stop offset=".8" stop-color="#cdd3da"/><stop offset="1" stop-color="#b3bac2"/><\/radialGradient><radialGradient id="ID-plug" cx=".38" cy=".32" r=".8"><stop offset="0" stop-color="#6c7682"/><stop offset=".55" stop-color="#3b434d"/><stop offset="1" stop-color="#1f252c"/><\/radialGradient><linearGradient id="ID-cable" gradientUnits="userSpaceOnUse" x1="96" y1="0" x2="122" y2="0"><stop offset="0" stop-color="#1f252c"/><stop offset="1" stop-color="#1f252c" stop-opacity="0"/><\/linearGradient><linearGradient id="ID-fadeg" gradientUnits="userSpaceOnUse" x1="96" y1="0" x2="122" y2="0"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#000"/><\/linearGradient><mask id="ID-fade" maskUnits="userSpaceOnUse" x="0" y="0" width="128" height="128"><rect width="128" height="128" fill="url(#ID-fadeg)"/><\/mask><linearGradient id="ID-boot" x1="0" x2="1"><stop offset="0" stop-color="#4a535e"/><stop offset=".4" stop-color="#2d343c"/><stop offset="1" stop-color="#1a1f25"/><\/linearGradient><radialGradient id="ID-btn" cx=".4" cy=".35" r=".7"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#d3d9df"/><\/radialGradient><radialGradient id="ID-halo"><stop offset="0" stop-color="#22c55e" stop-opacity=".85"/><stop offset="1" stop-color="#22c55e" stop-opacity="0"/><\/radialGradient><filter id="ID-soft2" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="1.6"/><\/filter><\/defs><rect x="28" y="14" width="78" height="78" rx="17" fill="#000" opacity=".1" transform="translate(1 3)"/><rect x="28" y="14" width="76" height="76" rx="17" fill="url(#ID-side)"/><rect x="24" y="10" width="76" height="76" rx="17" fill="url(#ID-face)" stroke="#aeb6bf" stroke-width="1"/><path d="M36 13.5h52" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/><circle cx="62" cy="50" r="25" fill="url(#ID-well)" stroke="#aab2ba" stroke-width=".9"/><circle cx="62" cy="50" r="22.5" fill="none" stroke="#000" stroke-opacity=".08" stroke-width="2"/><circle class="sp-lring-g" cx="62" cy="50" r="22.3" fill="none" stroke="#22c55e" stroke-width="5" filter="url(#ID-soft2)"/><circle class="sp-lring" cx="62" cy="50" r="22.3" fill="none" stroke="#c3cad2" stroke-width="1.8"/><circle cx="62" cy="50.8" r="17.5" fill="#000" opacity=".18"/><circle cx="62" cy="50" r="17" fill="url(#ID-plug)" stroke="#1b2026" stroke-width=".8"/><circle cx="62" cy="50" r="12.5" fill="none" stroke="#7d8793" stroke-opacity=".5" stroke-width="1"/><circle cx="62" cy="50" r="6" fill="#2a3139" stroke="#5c6672" stroke-width=".8"/><path d="M51 42q4-5 10-5.5" fill="none" stroke="#fff" stroke-opacity=".4" stroke-width="1.8" stroke-linecap="round"/><path d="M62 74C62 90 61 99 67 106C73 113 86 114 98 115C106 115.6 113 116.5 121 118" fill="none" stroke="#000" stroke-opacity=".14" stroke-width="5" transform="translate(2 2.5)"/><path class="sp-cord" d="M62 74C62 90 61 99 67 106C73 113 86 114 98 115C106 115.6 113 116.5 121 118" fill="none" stroke="url(#ID-cable)" stroke-width="6" stroke-linecap="round"/><path d="M62 74C62 90 61 99 67 106C73 113 86 114 98 115C106 115.6 113 116.5 121 118" fill="none" stroke="#4d5661" stroke-opacity=".9" stroke-width="3.6" stroke-linecap="round" mask="url(#ID-fade)"/><path d="M60.8 76C60.8 90 60 99 65.8 105.5" fill="none" stroke="#fff" stroke-opacity=".25" stroke-width="1.1" stroke-linecap="round"/><path d="M57 64.5h10l-1.6 11h-6.8z" fill="url(#ID-boot)" stroke="#15191e" stroke-width=".6"/><path d="M58.6 68h6.8M59 71h6" stroke="#5c6672" stroke-width=".7"/><circle class="sp-halo" cx="86" cy="24" r="13" fill="url(#ID-halo)"/><circle cx="86" cy="24" r="7.4" fill="#c3cad2"/><circle class="sp-ring" cx="86" cy="24" r="7.2" fill="none" stroke="#b3bac2" stroke-width="2"/><circle cx="86" cy="24" r="5.2" fill="url(#ID-btn)"/><path d="M86 21v2.6M84 22.2a2.8 2.8 0 1 0 4 0" fill="none" stroke="#9aa3ad" stroke-width=".9" stroke-linecap="round"/>',k:'.mh-smart_plug .sp-halo,.mh-smart_plug .sp-lring-g{opacity:0;transition:opacity .4s}.mh-smart_plug .sp-halo{transform-box:view-box;transform-origin:86px 24px}.mh-smart_plug.is-on .sp-ring{stroke:#22c55e}.mh-smart_plug.is-on .sp-lring{stroke:#7ff0a8}.mh-smart_plug.is-on .sp-lring-g{opacity:.8;animation:mh-breathe 2s ease-in-out infinite}.mh-smart_plug.is-on .sp-halo{opacity:1;animation:mh-smart_plug-glow 2s ease-in-out infinite}@keyframes mh-smart_plug-glow{0%,100%{opacity:.55;transform:scale(.85)}50%{opacity:1;transform:scale(1.1)}}',f:['mh-breathe']},table_lamp:{n:'Table lamp',c:'lighting',d:'A ceramic table lamp; when on, the shade glows warm and light spills from its top and bottom.',s:[['off',''],['on','is-on']],v:'2.8 7.2 122.5 122.5',b:'<defs><linearGradient id="ID-fab" x1="0" x2="1"><stop offset="0" stop-color="#d9dde2"/><stop offset=".3" stop-color="#ffffff"/><stop offset=".7" stop-color="#eef0f3"/><stop offset="1" stop-color="#c6ccd3"/><\/linearGradient><linearGradient id="ID-lit" x1="0" x2="1"><stop offset="0" style="stop-color:var(--mh-color,#ffb13b)"/><stop offset=".38" stop-color="#fff7e6"/><stop offset=".62" stop-color="#fff3da"/><stop offset="1" style="stop-color:var(--mh-color,#ffb13b)"/><\/linearGradient><radialGradient id="ID-cer" cx=".34" cy=".3" r=".85"><stop offset="0" stop-color="#8d98a5"/><stop offset=".45" stop-color="#5a6470"/><stop offset="1" stop-color="#2d343c"/><\/radialGradient><linearGradient id="ID-brass" x1="0" x2="1"><stop offset="0" stop-color="#a77b3e"/><stop offset=".4" stop-color="#f3d79b"/><stop offset="1" stop-color="#8f6630"/><\/linearGradient><linearGradient id="ID-cone" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--mh-color,#ffb13b)" stop-opacity=".55"/><stop offset="1" style="stop-color:var(--mh-color,#ffb13b)" stop-opacity="0"/><\/linearGradient><linearGradient id="ID-up" x1="0" y1="1" x2="0" y2="0"><stop offset="0" style="stop-color:var(--mh-color,#ffb13b)" stop-opacity=".5"/><stop offset="1" style="stop-color:var(--mh-color,#ffb13b)" stop-opacity="0"/><\/linearGradient><radialGradient id="ID-halo"><stop offset="0" style="stop-color:var(--mh-color,#ffb13b)" stop-opacity=".7"/><stop offset="1" style="stop-color:var(--mh-color,#ffb13b)" stop-opacity="0"/><\/radialGradient><radialGradient id="ID-shadow"><stop offset="0" stop-color="#000" stop-opacity=".32"/><stop offset="1" stop-color="#000" stop-opacity="0"/><\/radialGradient><filter id="ID-soft" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="3"/><\/filter><\/defs><ellipse cx="64" cy="121" rx="40" ry="3.6" fill="url(#ID-shadow)"/><g class="tl-light"><path class="tl-cone" d="M31 64h66l22 56H9z" fill="url(#ID-cone)" filter="url(#ID-soft)"/><path class="tl-up" d="M46 25h36l12-18H34z" fill="url(#ID-up)" filter="url(#ID-soft)"/><ellipse class="tl-halo" cx="64" cy="44" rx="52" ry="34" fill="url(#ID-halo)"/><\/g><rect x="60" y="62" width="8" height="8" fill="url(#ID-brass)"/><rect x="53" y="68" width="22" height="7" rx="2.5" fill="url(#ID-brass)" stroke="#8a632f" stroke-width=".7"/><path d="M51 75C37 79 34 102 45 110H83C94 102 91 79 77 75Z" fill="url(#ID-cer)" stroke="#5f6974" stroke-width="1"/><path d="M47 86q2-6 8-8" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="2.6" stroke-linecap="round"/><rect x="47" y="109" width="34" height="8" rx="2.5" fill="url(#ID-brass)" stroke="#8a632f" stroke-width=".7"/><path d="M44 24L30 62A34 6 0 0 0 98 62L84 24A20 4 0 0 1 44 24Z" fill="url(#ID-fab)" stroke="#aeb6bf" stroke-width="1"/><path class="tl-lit" d="M44 24L30 62A34 6 0 0 0 98 62L84 24A20 4 0 0 1 44 24Z" fill="url(#ID-lit)"/><g stroke="#b9c0c8" stroke-opacity=".5" stroke-width=".8"><path d="M52 28l-6 38"/><path d="M64 28.5v39"/><path d="M76 28l6 38"/><\/g><ellipse cx="64" cy="24" rx="20" ry="4" fill="#cdd3da" stroke="#aeb6bf" stroke-width="1"/><ellipse class="tl-top" cx="64" cy="24" rx="18" ry="2.8" fill="#fff6e0"/><path d="M30 62A34 6 0 0 0 98 62" fill="none" stroke="#aeb6bf" stroke-width="1.6"/><path d="M45 30l-9 26" stroke="#fff" stroke-opacity=".85" stroke-width="2.4" stroke-linecap="round"/>',k:'.mh-table_lamp .tl-light,.mh-table_lamp .tl-lit,.mh-table_lamp .tl-top{opacity:0;transition:opacity .5s}.mh-table_lamp .tl-halo{transform-box:view-box;transform-origin:64px 44px}.mh-table_lamp .tl-top{fill:var(--mh-color,#ffb13b)}.mh-table_lamp.is-on .tl-light,.mh-table_lamp.is-on .tl-lit{opacity:1}.mh-table_lamp.is-on .tl-top{opacity:.9}.mh-table_lamp.is-on .tl-halo{animation:mh-table_lamp-glow 3s ease-in-out infinite}.mh-table_lamp.is-on .tl-cone,.mh-table_lamp.is-on .tl-up{animation:mh-breathe 3s ease-in-out infinite}@keyframes mh-table_lamp-glow{0%,100%{opacity:.55;transform:scale(.92)}50%{opacity:1;transform:scale(1.04)}}.mh-table_lamp .tl-cone,.mh-table_lamp .tl-halo,.mh-table_lamp .tl-light,.mh-table_lamp .tl-lit,.mh-table_lamp .tl-top,.mh-table_lamp .tl-up{fill-opacity:calc(.22 + .78 * var(--mh-level,1));stroke-opacity:calc(.22 + .78 * var(--mh-level,1))}',f:['mh-breathe']},wall_switch:{n:'Wall switch',c:'lighting',d:'A wall rocker switch; the rocker never moves, only its LED lights up when the circuit is on.',s:[['off',''],['on','is-on']],v:'8.4 8.4 111.2 111.2',b:'<defs><linearGradient id="ID-plate" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".55" stop-color="#f1f3f5"/><stop offset="1" stop-color="#d3d9df"/><\/linearGradient><linearGradient id="ID-well" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c3cad2"/><stop offset="1" stop-color="#e3e7eb"/><\/linearGradient><linearGradient id="ID-rkoff" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".48" stop-color="#f3f5f7"/><stop offset=".52" stop-color="#dfe3e8"/><stop offset="1" stop-color="#c4cbd2"/><\/linearGradient><linearGradient id="ID-rkon" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c4cbd2"/><stop offset=".48" stop-color="#dfe3e8"/><stop offset=".52" stop-color="#f3f5f7"/><stop offset="1" stop-color="#ffffff"/><\/linearGradient><radialGradient id="ID-halo"><stop offset="0" style="stop-color:var(--mh-color,#ffb13b)" stop-opacity=".9"/><stop offset="1" style="stop-color:var(--mh-color,#ffb13b)" stop-opacity="0"/><\/radialGradient><radialGradient id="ID-shadow"><stop offset="0" stop-color="#000" stop-opacity=".22"/><stop offset="1" stop-color="#000" stop-opacity="0"/><\/radialGradient><\/defs><rect x="22" y="22" width="88" height="88" rx="16" fill="#000" opacity=".08" transform="translate(1.5 2.5)"/><rect x="20" y="20" width="88" height="88" rx="16" fill="url(#ID-plate)" stroke="#aeb6bf" stroke-width="1.1"/><path d="M28 24.5h72" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/><rect x="40" y="30" width="48" height="68" rx="9" fill="url(#ID-well)" stroke="#b3bac2" stroke-width=".8"/><g class="ws-off"><rect x="42.5" y="32.5" width="43" height="63" rx="7.5" fill="url(#ID-rkoff)" stroke="#aab2ba" stroke-width=".9"/><path d="M45 35.5h38" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/><path d="M43 64h42" stroke="#b3bac2" stroke-width="1"/><path d="M44 92.5h40" stroke="#9aa3ad" stroke-opacity=".6" stroke-width="1.4" stroke-linecap="round"/><\/g><g class="ws-on"><rect x="42.5" y="32.5" width="43" height="63" rx="7.5" fill="url(#ID-rkon)" stroke="#aab2ba" stroke-width=".9"/><path d="M44 35.5h40" stroke="#9aa3ad" stroke-opacity=".6" stroke-width="1.4" stroke-linecap="round"/><path d="M43 64h42" stroke="#b3bac2" stroke-width="1"/><path d="M45 92.5h38" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/><\/g><ellipse class="ws-halo" cx="64" cy="44" rx="17" ry="11" fill="url(#ID-halo)"/><rect class="ws-led" x="56.5" y="41.5" width="15" height="5" rx="2.5" fill="#b3bac2" stroke="#9aa3ad" stroke-width=".6"/><rect class="ws-core" x="59" y="43" width="10" height="2" rx="1" fill="#fff"/><rect x="60" y="80" width="8" height="2.4" rx="1.2" fill="#b3bac2"/>',k:'.mh-wall_switch .ws-on,.mh-wall_switch .ws-halo,.mh-wall_switch .ws-core{opacity:0;transition:opacity .35s}.mh-wall_switch .ws-off{transition:opacity .35s}.mh-wall_switch .ws-halo{transform-box:view-box;transform-origin:64px 44px}.mh-wall_switch.is-on .ws-led{fill:var(--mh-color,#ffb13b);stroke:#e08a00}.mh-wall_switch.is-on .ws-core{opacity:.85;animation:mh-breathe 2s ease-in-out infinite}.mh-wall_switch.is-on .ws-halo{opacity:1;animation:mh-wall_switch-glow 2s ease-in-out infinite}@keyframes mh-wall_switch-glow{0%,100%{opacity:.7;transform:scale(.9)}50%{opacity:1;transform:scale(1.1)}}',f:['mh-breathe']},ceiling_fan:{n:'Ceiling fan',c:'climate',d:'Wooden blades turn slowly on low and fast on high, the glass bowl glows warm when the light is on, and fan plus light can run together.',s:[['off',''],['low','is-on is-low'],['high','is-on is-high'],['light','is-light'],['fan_light','is-on is-low is-light']],v:'-2.9 -21.4 133.8 133.8',b:'<defs><linearGradient id="ID-metal" x1="0" x2="1"><stop offset="0" stop-color="#eef1f4"/><stop offset=".3" stop-color="#ffffff"/><stop offset=".65" stop-color="#b9c1ca"/><stop offset="1" stop-color="#8a939d"/><\/linearGradient><linearGradient id="ID-metal2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f4f6f8"/><stop offset="1" stop-color="#aab2bb"/><\/linearGradient><linearGradient id="ID-wood" x1="0" y1="-1" x2="0" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#d9a26a"/><stop offset=".5" stop-color="#b9783f"/><stop offset="1" stop-color="#8a5226"/><\/linearGradient><radialGradient id="ID-disc"><stop offset="0" stop-color="#b9783f" stop-opacity="0"/><stop offset=".25" stop-color="#b9783f" stop-opacity=".12"/><stop offset=".92" stop-color="#a86a35" stop-opacity=".24"/><stop offset="1" stop-color="#a86a35" stop-opacity="0"/><\/radialGradient><linearGradient id="ID-glass" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#dfe4ea"/><\/linearGradient><linearGradient id="ID-lit" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff6dc"/><stop offset="1" stop-color="#ffc35a"/><\/linearGradient><radialGradient id="ID-glow"><stop offset="0" stop-color="#ffc24d" stop-opacity=".7"/><stop offset=".5" stop-color="#ffb13b" stop-opacity=".25"/><stop offset="1" stop-color="#ffb13b" stop-opacity="0"/><\/radialGradient><linearGradient id="ID-edge" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5a3317"/><stop offset="1" stop-color="#3a200d"/><\/linearGradient><\/defs><circle class="cf-glow" cx="64" cy="74" r="36" fill="url(#ID-glow)"/><g transform="translate(64 57.8) scale(1 .34)"><g class="cf-blades"><g transform="rotate(20)"><path d="M9-4.6L21-6.4C38-10.5 53-9.5 57 0 53 9.5 38 10.5 21 6.4L9 4.6z" fill="url(#ID-edge)"/><\/g><g transform="rotate(110)"><path d="M9-4.6L21-6.4C38-10.5 53-9.5 57 0 53 9.5 38 10.5 21 6.4L9 4.6z" fill="url(#ID-edge)"/><\/g><g transform="rotate(200)"><path d="M9-4.6L21-6.4C38-10.5 53-9.5 57 0 53 9.5 38 10.5 21 6.4L9 4.6z" fill="url(#ID-edge)"/><\/g><g transform="rotate(290)"><path d="M9-4.6L21-6.4C38-10.5 53-9.5 57 0 53 9.5 38 10.5 21 6.4L9 4.6z" fill="url(#ID-edge)"/><\/g><\/g><\/g><g transform="translate(64 56) scale(1 .34)"><circle class="cf-disc" r="57" fill="url(#ID-disc)"/><g class="cf-blades"><g transform="rotate(20)"><path d="M9-4.6L21-6.4C38-10.5 53-9.5 57 0 53 9.5 38 10.5 21 6.4L9 4.6z" fill="url(#ID-wood)"/><g fill="none" stroke="#6b3f1d" stroke-opacity=".45" stroke-width=".7" vector-effect="non-scaling-stroke"><path d="M14-3.6C30-6 44-6.4 54-2.6"/><path d="M16 0C30-.6 44-.4 56 .2"/><path d="M14 3.4C28 5.6 42 6.4 53 3.4"/><path d="M24-1.8C32-2.6 38-2.4 44-1.4" stroke-opacity=".3"/><\/g><path d="M22-5.6C38-9 50-8.6 55-2" stroke="#f0c896" stroke-opacity=".7" stroke-width="1" fill="none" vector-effect="non-scaling-stroke"/><path d="M9-4.6L21-6.4C38-10.5 53-9.5 57 0 53 9.5 38 10.5 21 6.4L9 4.6z" fill="none" stroke="#4a2a12" stroke-opacity=".6" stroke-width=".8" vector-effect="non-scaling-stroke"/><rect x="6" y="-2.6" width="17" height="5.2" rx="2" fill="#7d8690"/><\/g><g transform="rotate(110)"><path d="M9-4.6L21-6.4C38-10.5 53-9.5 57 0 53 9.5 38 10.5 21 6.4L9 4.6z" fill="url(#ID-wood)"/><g fill="none" stroke="#6b3f1d" stroke-opacity=".45" stroke-width=".7" vector-effect="non-scaling-stroke"><path d="M14-3.6C30-6 44-6.4 54-2.6"/><path d="M16 0C30-.6 44-.4 56 .2"/><path d="M14 3.4C28 5.6 42 6.4 53 3.4"/><path d="M24-1.8C32-2.6 38-2.4 44-1.4" stroke-opacity=".3"/><\/g><path d="M22-5.6C38-9 50-8.6 55-2" stroke="#f0c896" stroke-opacity=".7" stroke-width="1" fill="none" vector-effect="non-scaling-stroke"/><path d="M9-4.6L21-6.4C38-10.5 53-9.5 57 0 53 9.5 38 10.5 21 6.4L9 4.6z" fill="none" stroke="#4a2a12" stroke-opacity=".6" stroke-width=".8" vector-effect="non-scaling-stroke"/><rect x="6" y="-2.6" width="17" height="5.2" rx="2" fill="#7d8690"/><\/g><g transform="rotate(200)"><path d="M9-4.6L21-6.4C38-10.5 53-9.5 57 0 53 9.5 38 10.5 21 6.4L9 4.6z" fill="url(#ID-wood)"/><g fill="none" stroke="#6b3f1d" stroke-opacity=".45" stroke-width=".7" vector-effect="non-scaling-stroke"><path d="M14-3.6C30-6 44-6.4 54-2.6"/><path d="M16 0C30-.6 44-.4 56 .2"/><path d="M14 3.4C28 5.6 42 6.4 53 3.4"/><path d="M24-1.8C32-2.6 38-2.4 44-1.4" stroke-opacity=".3"/><\/g><path d="M22-5.6C38-9 50-8.6 55-2" stroke="#f0c896" stroke-opacity=".7" stroke-width="1" fill="none" vector-effect="non-scaling-stroke"/><path d="M9-4.6L21-6.4C38-10.5 53-9.5 57 0 53 9.5 38 10.5 21 6.4L9 4.6z" fill="none" stroke="#4a2a12" stroke-opacity=".6" stroke-width=".8" vector-effect="non-scaling-stroke"/><rect x="6" y="-2.6" width="17" height="5.2" rx="2" fill="#7d8690"/><\/g><g transform="rotate(290)"><path d="M9-4.6L21-6.4C38-10.5 53-9.5 57 0 53 9.5 38 10.5 21 6.4L9 4.6z" fill="url(#ID-wood)"/><g fill="none" stroke="#6b3f1d" stroke-opacity=".45" stroke-width=".7" vector-effect="non-scaling-stroke"><path d="M14-3.6C30-6 44-6.4 54-2.6"/><path d="M16 0C30-.6 44-.4 56 .2"/><path d="M14 3.4C28 5.6 42 6.4 53 3.4"/><path d="M24-1.8C32-2.6 38-2.4 44-1.4" stroke-opacity=".3"/><\/g><path d="M22-5.6C38-9 50-8.6 55-2" stroke="#f0c896" stroke-opacity=".7" stroke-width="1" fill="none" vector-effect="non-scaling-stroke"/><path d="M9-4.6L21-6.4C38-10.5 53-9.5 57 0 53 9.5 38 10.5 21 6.4L9 4.6z" fill="none" stroke="#4a2a12" stroke-opacity=".6" stroke-width=".8" vector-effect="non-scaling-stroke"/><rect x="6" y="-2.6" width="17" height="5.2" rx="2" fill="#7d8690"/><\/g><\/g><\/g><path d="M47 5h34q0 8-11 9.5H58Q47 13 47 5z" fill="url(#ID-metal)" stroke="#a3abb4" stroke-width=".8"/><rect x="61.4" y="13" width="5.2" height="21" fill="url(#ID-metal)" stroke="#a3abb4" stroke-width=".6"/><path d="M41 39q0-7 23-7t23 7v9q0 6-23 6t-23-6z" fill="url(#ID-metal)" stroke="#9aa3ad" stroke-width="1"/><path d="M41 39q0 6 23 6t23-6" fill="none" stroke="#c9d0d7" stroke-width="1"/><path d="M46 37.5q4-3 14-3.5" stroke="#fff" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M50 54h28v5q0 5-14 5t-14-5z" fill="url(#ID-metal2)" stroke="#9aa3ad" stroke-width=".8"/><path class="cf-bowl" d="M47.5 64h33q0 17-16.5 17T47.5 64z" fill="url(#ID-glass)" stroke="#b3bbc4" stroke-width="1"/><path class="cf-bowl-lit" d="M47.5 64h33q0 17-16.5 17T47.5 64z" fill="url(#ID-lit)" stroke="#e59a2a" stroke-width="1"/><path d="M52 67q2 7 8 9.5" stroke="#fff" stroke-width="1.6" fill="none" stroke-linecap="round" opacity=".9"/><circle cx="64" cy="83.5" r="2.6" fill="url(#ID-metal)" stroke="#9aa3ad" stroke-width=".6"/>',k:'.mh-ceiling_fan .cf-blades{transform-box:view-box;transform-origin:0 0}.mh-ceiling_fan .cf-glow,.mh-ceiling_fan .cf-bowl-lit,.mh-ceiling_fan .cf-disc{opacity:0;transition:opacity .6s}.mh-ceiling_fan.is-low .cf-blades{animation:mh-spin 2.4s linear infinite}.mh-ceiling_fan.is-high .cf-blades{animation:mh-spin .32s linear infinite;opacity:.75}.mh-ceiling_fan.is-high .cf-disc{opacity:1}.mh-ceiling_fan.is-light .cf-glow{opacity:1;animation:mh-breathe 3s ease-in-out infinite}.mh-ceiling_fan.is-light .cf-bowl-lit{opacity:1}',f:['mh-breathe','mh-spin']},kettle:{n:'Kettle',c:'kitchen',d:'Boiling sends bubbles up the water window, puffs steam from the spout and lights the blue strip on the base.',s:[['off',''],['boiling','is-on is-boiling']],v:'-2.2 6.8 122.5 122.5',b:'<defs><radialGradient id="ID-vap"><stop offset="0" stop-color="#c3ccd6" stop-opacity=".95"/><stop offset=".6" stop-color="#c3ccd6" stop-opacity=".4"/><stop offset="1" stop-color="#d3dbe3" stop-opacity="0"/><\/radialGradient><filter id="ID-haze" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="1.6"/><\/filter><linearGradient id="ID-steel" x1="0" x2="1"><stop offset="0" stop-color="#8d969f"/><stop offset=".14" stop-color="#e6eaee"/><stop offset=".32" stop-color="#bcc3cb"/><stop offset=".55" stop-color="#f7f8fa"/><stop offset=".8" stop-color="#a9b1ba"/><stop offset="1" stop-color="#737c86"/><\/linearGradient><linearGradient id="ID-shade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".35"/><stop offset=".25" stop-color="#fff" stop-opacity="0"/><stop offset=".85" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".18"/><\/linearGradient><linearGradient id="ID-black" x1="0" x2="1"><stop offset="0" stop-color="#4b535c"/><stop offset=".4" stop-color="#262b31"/><stop offset="1" stop-color="#101316"/><\/linearGradient><linearGradient id="ID-base" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a4148"/><stop offset="1" stop-color="#15181c"/><\/linearGradient><linearGradient id="ID-win" x1="0" x2="1"><stop offset="0" stop-color="#2a3a48"/><stop offset=".5" stop-color="#3e5a72"/><stop offset="1" stop-color="#22303c"/><\/linearGradient><linearGradient id="ID-water" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8fd0ff" stop-opacity=".85"/><stop offset="1" stop-color="#2f7fd0" stop-opacity=".9"/><\/linearGradient><linearGradient id="ID-led" x1="0" x2="1"><stop offset="0" stop-color="#2f9bff"/><stop offset=".5" stop-color="#7cc4ff"/><stop offset="1" stop-color="#2f9bff"/><\/linearGradient><linearGradient id="ID-ledw" x1="0" x2="1"><stop offset="0" stop-color="#ff8a1f"/><stop offset=".5" stop-color="#ffd27a"/><stop offset="1" stop-color="#ff8a1f"/><\/linearGradient><radialGradient id="ID-puff"><stop offset="0" stop-color="#e3e9ef" stop-opacity=".95"/><stop offset=".55" stop-color="#cdd6df" stop-opacity=".55"/><stop offset="1" stop-color="#cdd6df" stop-opacity="0"/><\/radialGradient><radialGradient id="ID-halo" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#2f9bff" stop-opacity=".55"/><stop offset="1" stop-color="#2f9bff" stop-opacity="0"/><\/radialGradient><radialGradient id="ID-shadow"><stop offset="0" stop-color="#000" stop-opacity=".34"/><stop offset="1" stop-color="#000" stop-opacity="0"/><\/radialGradient><filter id="ID-blur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation=".9"/><\/filter><clipPath id="ID-winclip"><rect x="47" y="50" width="9" height="48" rx="4.5"/><\/clipPath><\/defs><ellipse cx="64" cy="120" rx="42" ry="4" fill="url(#ID-shadow)"/><path d="M28 110q0-4 6-4h60q6 0 6 4v4q0 3-5 3H33q-5 0-5-3z" fill="url(#ID-base)"/><path d="M30 107.5h68" stroke="#5a626b" stroke-width=".8"/><rect class="kt-ring-off" x="32" y="110.5" width="64" height="2.6" rx="1.3" fill="#4a525a"/><rect class="kt-ring" x="32" y="110.5" width="64" height="2.6" rx="1.3" fill="url(#ID-led)"/><rect class="kt-ringw" x="32" y="110.5" width="64" height="2.6" rx="1.3" fill="url(#ID-ledw)"/><path d="M86 42q16 0 16 22v14q0 22-16 22" fill="none" stroke="url(#ID-black)" stroke-width="7" stroke-linecap="round"/><path d="M88 46q10 2 10 18" fill="none" stroke="#fff" stroke-opacity=".18" stroke-width="1.4" stroke-linecap="round"/><path d="M42 44L24.5 33.5q-3-1.5-3.6 1.2l-.2 1.6q0 1.4 1.4 2.2L41 58z" fill="url(#ID-steel)" stroke="#7a838d" stroke-width=".7"/><path d="M38 47L24 37.5" stroke="#fff" stroke-opacity=".7" stroke-width="1.2" stroke-linecap="round"/><path d="M42 34h44l8 70q0 3-4 3H38q-4 0-4-3z" fill="url(#ID-steel)" stroke="#78818b" stroke-width=".8"/><path d="M42 34h44l8 70q0 3-4 3H38q-4 0-4-3z" fill="url(#ID-shade)"/><rect x="34.5" y="100" width="59" height="4" fill="#000" fill-opacity=".08"/><path d="M40 30q0-6 6-6h36q6 0 6 6v5H40z" fill="url(#ID-black)"/><path d="M58 24q0-5 6-5t6 5z" fill="url(#ID-black)"/><path d="M44 27q3-1.6 8-1.6" stroke="#fff" stroke-opacity=".3" stroke-width="1.2" fill="none" stroke-linecap="round"/><rect x="45.5" y="48.5" width="12" height="51" rx="6" fill="#59626c"/><rect x="47" y="50" width="9" height="48" rx="4.5" fill="url(#ID-win)"/><g clip-path="url(#ID-winclip)"><rect x="46" y="62" width="11" height="37" fill="url(#ID-water)"/><path class="kt-surface" d="M44 62q2.5-1.5 5 0t5 0 5 0" fill="none" stroke="#d6efff" stroke-width="1"/><g class="kt-bubbles" fill="#e8f6ff"><circle cx="49.5" cy="94" r="1.2"/><circle cx="53" cy="92" r="1"/><circle cx="51" cy="96" r=".9"/><circle cx="54" cy="96" r="1.2"/><circle cx="49" cy="88" r=".8"/><\/g><rect x="47.6" y="50" width="2" height="48" fill="#fff" fill-opacity=".22"/><\/g><g stroke="#e9edf1" stroke-width=".8"><path d="M58 60h3"/><path d="M58 70h3"/><path d="M58 80h3"/><path d="M58 90h3"/><\/g><path d="M68 40l-1 60" stroke="#fff" stroke-opacity=".55" stroke-width="3" stroke-linecap="round"/><g class="kt-steam" filter="url(#ID-haze)" fill="url(#ID-vap)"><ellipse cx="20" cy="30" rx="7" ry="8"/><ellipse cx="16" cy="25" rx="8" ry="9"/><ellipse cx="23" cy="23" rx="7" ry="8.5"/><\/g>',k:'.mh-kettle .kt-bubbles circle,.mh-kettle .kt-steam ellipse,.mh-kettle .kt-surface{transform-box:view-box}.mh-kettle .kt-ring,.mh-kettle .kt-ringw,.mh-kettle .kt-halo,.mh-kettle .kt-bubbles circle,.mh-kettle .kt-steam ellipse{opacity:0}@keyframes mh-kettle-bub{0%{opacity:0;transform:translateY(0)}20%{opacity:1}100%{opacity:0;transform:translateY(-30px)}}@keyframes mh-kettle-warm{0%,100%{opacity:0}50%{opacity:1}}@keyframes mh-kettle-steam{0%{opacity:0;transform:translateY(8px)}30%{opacity:1}100%{opacity:0;transform:translateY(-8px)}}.mh-kettle.is-boiling .kt-ring{opacity:1}.mh-kettle.is-boiling .kt-ringw{animation:mh-kettle-warm 3s ease-in-out infinite}.mh-kettle.is-boiling .kt-surface{animation:mh-slosh .6s ease-in-out infinite}.mh-kettle.is-boiling .kt-bubbles circle{animation:mh-kettle-bub 1s ease-in -.2s infinite}.mh-kettle.is-boiling .kt-bubbles circle:nth-child(2){animation-delay:-.5s}.mh-kettle.is-boiling .kt-bubbles circle:nth-child(3){animation-delay:-.75s}.mh-kettle.is-boiling .kt-bubbles circle:nth-child(4){animation-delay:-.35s}.mh-kettle.is-boiling .kt-bubbles circle:nth-child(5){animation-delay:-.9s}.mh-kettle.is-boiling .kt-steam ellipse{animation:mh-kettle-steam 1.8s ease-out -.3s infinite}.mh-kettle.is-boiling .kt-steam ellipse:nth-child(2){animation-delay:-.9s}.mh-kettle.is-boiling .kt-steam ellipse:nth-child(3){animation-delay:-1.4s}',f:['mh-slosh']},door_lock:{n:'Smart lock',c:'security',d:'Smart deadbolt with an LED ring: green when locked, the bolt retracts and the ring blinks amber when unlocked, and when jammed the bolt sticks halfway while the ring and strike plate flash red.',s:[['locked',''],['unlocked','is-unlocked'],['jammed','is-jammed']],v:'-9.1 -9.1 146.2 146.2',b:'<defs><filter id="ID-blur" x="-.5" y="-.5" width="2" height="2"><feGaussianBlur stdDeviation="2.6"/><\/filter><linearGradient id="ID-edge" x1="0" x2="1"><stop offset="0" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".22"/><\/linearGradient><linearGradient id="ID-door" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e8cfae"/><stop offset=".5" stop-color="#d7b58b"/><stop offset="1" stop-color="#bf9567"/><\/linearGradient><linearGradient id="ID-frame" x1="0" x2="1"><stop offset="0" stop-color="#cfd5dc"/><stop offset=".4" stop-color="#f4f6f8"/><stop offset="1" stop-color="#b3bbc4"/><\/linearGradient><linearGradient id="ID-bolt" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fbfcfd"/><stop offset=".45" stop-color="#c9d0d7"/><stop offset="1" stop-color="#8a939e"/><\/linearGradient><linearGradient id="ID-bezel" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fdfdfe"/><stop offset=".35" stop-color="#a3acb6"/><stop offset=".6" stop-color="#eef1f4"/><stop offset="1" stop-color="#7f8893"/><\/linearGradient><radialGradient id="ID-face" cx=".38" cy=".32" r=".8"><stop offset="0" stop-color="#ffffff"/><stop offset=".7" stop-color="#eceff2"/><stop offset="1" stop-color="#d3d8de"/><\/radialGradient><linearGradient id="ID-turn" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5d6672"/><stop offset=".5" stop-color="#2f353d"/><stop offset="1" stop-color="#1b1f24"/><\/linearGradient><radialGradient id="ID-drop"><stop offset=".6" stop-color="#000" stop-opacity=".35"/><stop offset="1" stop-color="#000" stop-opacity="0"/><\/radialGradient><\/defs><rect x="10" y="6" width="88" height="116" rx="5" fill="url(#ID-door)" stroke="#a8825a" stroke-width="1"/><g fill="none" stroke="#8a6440" stroke-width=".8" stroke-opacity=".22"><path d="M16 6q2 40-1 80t2 36"/><path d="M27 6q-2 30 1 60t-1 56"/><path d="M40 6q2 20 0 30"/><path d="M44 96q-1 14 1 26"/><path d="M78 6q-2 22 1 34"/><path d="M82 92q2 16-1 30"/><path d="M91 6q1 50-1 116"/><\/g><g fill="none" stroke="#fff" stroke-width="1" stroke-opacity=".2"><path d="M21 6q-1 50 1 116"/><path d="M35 6q2 50-1 116"/><path d="M86 6q-1 50 1 116"/><\/g><rect x="10.5" y="6.5" width="87" height="115" rx="4.5" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="1"/><rect x="84" y="6" width="14" height="116" fill="url(#ID-edge)"/><rect x="100" y="6" width="18" height="116" rx="3" fill="url(#ID-frame)" stroke="#9aa3ad" stroke-width="1"/><rect x="102.5" y="50" width="13" height="28" rx="2.5" fill="#c3cad2" stroke="#8a939e" stroke-width=".8"/><rect x="104.5" y="57.5" width="9" height="13" rx="1.5" fill="#1d2228"/><rect class="dl-strike" x="102.5" y="50" width="13" height="28" rx="2.5" fill="none" stroke="#ff4d4f" stroke-width="2.4"/><g class="dl-bolt"><rect x="70" y="58.5" width="42" height="11" rx="2" fill="url(#ID-bolt)" stroke="#7d8692" stroke-width=".9"/><path d="M72 60.5h38" stroke="#fff" stroke-opacity=".8" stroke-width="1"/><\/g><g class="dl-lock"><circle cx="56" cy="67" r="35" fill="url(#ID-drop)"/><circle cx="54" cy="64" r="32" fill="url(#ID-bezel)" stroke="#8d96a1" stroke-width="1"/><circle class="dl-glow" cx="54" cy="64" r="26" fill="none" stroke-width="7" filter="url(#ID-blur)"/><circle class="dl-ring" cx="54" cy="64" r="26" fill="none" stroke-width="4"/><circle cx="54" cy="64" r="22.5" fill="url(#ID-face)" stroke="#b5bdc6" stroke-width=".8"/><g class="dl-turn"><rect x="35" y="58" width="38" height="12" rx="6" fill="url(#ID-turn)"/><path d="M40 60.6h28" stroke="#fff" stroke-opacity=".35" stroke-width="1.3" stroke-linecap="round"/><\/g><circle cx="54" cy="64" r="4" fill="#e9edf1" stroke="#1b1f24" stroke-width="1"/><path d="M33 50q8-14 24-16" stroke="#fff" stroke-opacity=".75" stroke-width="2" fill="none" stroke-linecap="round"/><\/g>',k:'.mh-door_lock .dl-bolt,.mh-door_lock .dl-turn,.mh-door_lock .dl-lock{transform-box:view-box}.mh-door_lock .dl-bolt{transition:transform .7s cubic-bezier(.5,0,.3,1)}.mh-door_lock .dl-turn{transform-origin:54px 64px;transition:transform .7s cubic-bezier(.5,0,.3,1)}.mh-door_lock .dl-ring{stroke:#22c55e}.mh-door_lock .dl-glow{stroke:#22c55e;opacity:.55;animation:mh-breathe 3s ease-in-out infinite}.mh-door_lock .dl-strike{opacity:0}.mh-door_lock.is-unlocked .dl-bolt{transform:translateX(-26px)}.mh-door_lock.is-unlocked .dl-turn{transform:rotate(90deg)}.mh-door_lock.is-unlocked .dl-ring,.mh-door_lock.is-unlocked .dl-glow{stroke:#ffb13b;animation:mh-blink 1.4s ease-in-out infinite}.mh-door_lock.is-unlocked .dl-glow{opacity:.7}.mh-door_lock.is-jammed .dl-bolt{animation:mh-door-lock-jam .5s ease-in-out infinite}.mh-door_lock.is-jammed .dl-turn{transform:rotate(40deg);animation:mh-door-lock-twist .5s ease-in-out infinite}.mh-door_lock.is-jammed .dl-ring,.mh-door_lock.is-jammed .dl-glow{stroke:#ff4d4f;animation:mh-blink 1s steps(2,jump-none) infinite}.mh-door_lock.is-jammed .dl-glow{opacity:.75}.mh-door_lock.is-jammed .dl-strike{opacity:1;animation:mh-blink 1s steps(2,jump-none) infinite}@keyframes mh-door-lock-jam{0%,100%{transform:translateX(-12px)}40%{transform:translateX(-9px)}60%{transform:translateX(-14px)}}@keyframes mh-door-lock-twist{0%,100%{transform:rotate(40deg)}40%{transform:rotate(50deg)}60%{transform:rotate(34deg)}}',f:['mh-blink','mh-breathe']},door_sensor:{n:'Door sensor',c:'sensors',d:'Magnetic door contact: when the door opens a gap appears between the two sensor parts and the magnet on the frame glows amber.',s:[['closed',''],['open','is-open']],v:'-9.8 -9.2 147.5 147.5',b:'<defs><linearGradient id="ID-trim" x1="0" x2="1"><stop offset="0" stop-color="#e3e7eb"/><stop offset=".35" stop-color="#ffffff"/><stop offset="1" stop-color="#c8ced5"/><\/linearGradient><linearGradient id="ID-dark" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1c2026"/><stop offset=".6" stop-color="#2e333a"/><stop offset="1" stop-color="#3d434b"/><\/linearGradient><linearGradient id="ID-door" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f7f8fa"/><stop offset=".6" stop-color="#e6e9ed"/><stop offset="1" stop-color="#d3d8de"/><\/linearGradient><linearGradient id="ID-dooro" x1="0" x2="1"><stop offset="0" stop-color="#d2d7dd"/><stop offset=".7" stop-color="#f1f3f5"/><stop offset="1" stop-color="#ffffff"/><\/linearGradient><linearGradient id="ID-panel" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e2e6ea"/><stop offset="1" stop-color="#f4f6f8"/><\/linearGradient><linearGradient id="ID-chrome" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".4" stop-color="#b9c1ca"/><stop offset=".7" stop-color="#eef1f4"/><stop offset="1" stop-color="#7f8893"/><\/linearGradient><linearGradient id="ID-sensor" x1="0" x2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#cfd5dc"/><\/linearGradient><radialGradient id="ID-shadow"><stop offset="0" stop-color="#000" stop-opacity=".34"/><stop offset="1" stop-color="#000" stop-opacity="0"/><\/radialGradient><filter id="ID-blur" x="-1" y="-1" width="3" height="3"><feGaussianBlur stdDeviation="2.2"/><\/filter><filter id="ID-soft" x="-.2" y="-.1" width="1.4" height="1.2"><feGaussianBlur stdDeviation="2.5"/><\/filter><\/defs><ellipse cx="64" cy="122" rx="52" ry="3.5" fill="url(#ID-shadow)"/><rect x="22" y="6" width="84" height="117" rx="2" fill="url(#ID-trim)" stroke="#a9b1ba" stroke-width="1"/><path d="M23.5 7.5h81" stroke="#fff" stroke-width="1"/><rect x="30" y="14" width="68" height="109" fill="url(#ID-dark)"/><path d="M30 14h68" stroke="#000" stroke-opacity=".35" stroke-width="2"/><g class="ds-closed"><rect x="30" y="14" width="68" height="109" fill="url(#ID-door)" stroke="#b3bbc4" stroke-width=".8"/><g fill="url(#ID-panel)" stroke="#c4cad1" stroke-width=".8"><rect x="38" y="22" width="52" height="40" rx="1.5"/><rect x="38" y="70" width="52" height="45" rx="1.5"/><\/g><g fill="none" stroke="#9aa3ad" stroke-opacity=".55" stroke-width="1.2"><path d="M38.6 61.4V22.6H89.4M38.6 114.4V70.6H89.4"/><\/g><g fill="none" stroke="#fff" stroke-width="1.2"><path d="M39 61.4H89.4V23M39 114.4H89.4V71"/><\/g><rect x="82" y="64" width="5" height="9" rx="2" fill="url(#ID-chrome)" stroke="#7d8692" stroke-width=".6"/><rect x="72" y="66" width="14" height="4" rx="2" fill="url(#ID-chrome)" stroke="#7d8692" stroke-width=".6"/><rect x="85" y="22" width="10" height="22" rx="2.5" fill="url(#ID-sensor)" stroke="#9aa3ad" stroke-width=".8"/><circle cx="90" cy="27.5" r="2.4" fill="#22c55e" opacity=".35" filter="url(#ID-blur)"/><circle class="ds-ledc" cx="90" cy="27.5" r="1.3" fill="#22c55e"/><\/g><g class="ds-open"><path d="M75 14H84V123H75Z" fill="#000" opacity=".3" filter="url(#ID-soft)"/><path d="M70 11L75 12.4V123H70Z" fill="#c3cad2" stroke="#9aa3ad" stroke-width=".6"/><path d="M30 14L70 11V123H30Z" fill="url(#ID-dooro)" stroke="#9aa3ad" stroke-width=".8"/><g fill="url(#ID-panel)" stroke="#c4cad1" stroke-width=".7"><path d="M35 22L65 19.6V62L35 62Z"/><path d="M35 70L65 70V116L35 116Z"/><\/g><g fill="none" stroke="#fff" stroke-width="1"><path d="M35.5 61.5H64.5V18.6M35.5 115H64.5V70.6"/><\/g><rect x="56" y="64" width="12" height="4.4" rx="2.2" fill="url(#ID-chrome)" stroke="#7d8692" stroke-width=".6"/><path d="M60 19.2L68 18.6V40L60 40.4Z" fill="url(#ID-sensor)" stroke="#9aa3ad" stroke-width=".8"/><circle class="ds-ledo" cx="64" cy="22.5" r="1.4" fill="#ffb13b"/><path d="M70 11V123" stroke="#fff" stroke-opacity=".7" stroke-width="1"/><\/g><rect x="99" y="24" width="6" height="18" rx="2" fill="url(#ID-sensor)" stroke="#9aa3ad" stroke-width=".8"/><rect class="ds-magglow" x="97" y="21" width="10" height="24" rx="4" fill="#ffb13b" filter="url(#ID-blur)"/><rect class="ds-mag" x="100.3" y="26" width="3.4" height="14" rx="1.5" fill="#ffb13b"/>',k:'.mh-door_sensor .ds-open{transform-box:view-box;transform-origin:30px 68px;opacity:0}.mh-door_sensor .ds-mag,.mh-door_sensor .ds-magglow{opacity:0}.mh-door_sensor.is-open .ds-closed{opacity:0}.mh-door_sensor.is-open .ds-open{opacity:1}.mh-door_sensor.is-open .ds-mag{opacity:1;animation:mh-breathe 1.2s ease-in-out infinite}.mh-door_sensor.is-open .ds-magglow{opacity:.8;animation:mh-blink 1.2s ease-in-out infinite}.mh-door_sensor.is-open .ds-ledo{animation:mh-blink 1.2s ease-in-out infinite}',f:['mh-blink','mh-breathe']},humidity_sensor:{n:'Humidity sensor',c:'sensors',d:'Round humidity sensor: the display shows a drop and the humidity percentage; the drop fills and the screen turns blue when humid, and almost empties with an amber tint when dry.',s:[['normal',''],['humid','is-on is-humid'],['dry','is-on is-dry']],v:'3.1 4.3 121.9 121.9',b:'<defs><radialGradient id="ID-shadow"><stop offset="0" stop-color="#000" stop-opacity=".3"/><stop offset="1" stop-color="#000" stop-opacity="0"/><\/radialGradient><radialGradient id="ID-body" cx=".35" cy=".3" r=".85"><stop offset="0" stop-color="#ffffff"/><stop offset=".6" stop-color="#eef1f4"/><stop offset="1" stop-color="#c3cad1"/><\/radialGradient><linearGradient id="ID-side" x1="0" x2="1"><stop offset="0" stop-color="#aeb6bf"/><stop offset=".4" stop-color="#d9dee3"/><stop offset="1" stop-color="#959ea8"/><\/linearGradient><radialGradient id="ID-lcd" cx=".4" cy=".35" r=".8"><stop offset="0" stop-color="#eef0ea"/><stop offset="1" stop-color="#c7cdc5"/><\/radialGradient><radialGradient id="ID-humid" cx=".4" cy=".35" r=".8"><stop offset="0" stop-color="#dff0ff"/><stop offset="1" stop-color="#86bff7"/><\/radialGradient><radialGradient id="ID-dry" cx=".4" cy=".35" r=".8"><stop offset="0" stop-color="#fff0d6"/><stop offset="1" stop-color="#ffc56e"/><\/radialGradient><linearGradient id="ID-refl" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".5"/><stop offset=".45" stop-color="#fff" stop-opacity="0"/><\/linearGradient><clipPath id="ID-drop"><path d="M64 27C60 33 53.5 40.5 53.5 47a10.5 10.5 0 0 0 21 0C74.5 40.5 68 33 64 27z"/><\/clipPath><\/defs><ellipse cx="64" cy="117" rx="44" ry="4" fill="url(#ID-shadow)"/><ellipse cx="64" cy="68" rx="46" ry="46" fill="url(#ID-side)"/><circle cx="64" cy="63" r="46" fill="url(#ID-body)" stroke="#b6bdc5" stroke-width="1"/><path d="M30 42a40 40 0 0 1 26-23" stroke="#fff" stroke-width="2.2" stroke-linecap="round" fill="none"/><circle cx="64" cy="63" r="35" fill="#9aa39a" opacity=".45"/><circle cx="64" cy="63" r="34" fill="url(#ID-lcd)"/><circle class="hs-humid" cx="64" cy="63" r="34" fill="url(#ID-humid)"/><circle class="hs-dry" cx="64" cy="63" r="34" fill="url(#ID-dry)"/><g clip-path="url(#ID-drop)"><rect class="hs-fill" x="50" y="27" width="28" height="31" fill="#2b3034"/><\/g><path d="M64 27C60 33 53.5 40.5 53.5 47a10.5 10.5 0 0 0 21 0C74.5 40.5 68 33 64 27z" fill="none" stroke="#2b3034" stroke-width="1.8" stroke-linejoin="round"/><path d="M58.6 46.5a5.6 5.6 0 0 0 3.6 5.4" stroke="#fff" stroke-opacity=".7" stroke-width="1.4" fill="none" stroke-linecap="round"/><g fill="#2b3034"><g class="mh-sample"><g class="hs-n0"><rect x="47.00" y="65.32" width="2.20" height="6.96" rx=".9"/><rect x="48.32" y="71.40" width="6.36" height="2.20" rx=".9"/><rect x="53.80" y="65.32" width="2.20" height="6.96" rx=".9"/><rect x="53.80" y="72.72" width="2.20" height="6.96" rx=".9"/><rect x="60.32" y="64.00" width="6.36" height="2.20" rx=".9"/><rect x="65.80" y="65.32" width="2.20" height="6.96" rx=".9"/><rect x="65.80" y="72.72" width="2.20" height="6.96" rx=".9"/><rect x="60.32" y="78.80" width="6.36" height="2.20" rx=".9"/><rect x="59.00" y="72.72" width="2.20" height="6.96" rx=".9"/><rect x="59.00" y="65.32" width="2.20" height="6.96" rx=".9"/><rect x="60.32" y="71.40" width="6.36" height="2.20" rx=".9"/><\/g><g class="hs-n1"><rect x="48.32" y="64.00" width="6.36" height="2.20" rx=".9"/><rect x="53.80" y="65.32" width="2.20" height="6.96" rx=".9"/><rect x="53.80" y="72.72" width="2.20" height="6.96" rx=".9"/><rect x="60.32" y="64.00" width="6.36" height="2.20" rx=".9"/><rect x="59.00" y="65.32" width="2.20" height="6.96" rx=".9"/><rect x="60.32" y="71.40" width="6.36" height="2.20" rx=".9"/><rect x="59.00" y="72.72" width="2.20" height="6.96" rx=".9"/><rect x="60.32" y="78.80" width="6.36" height="2.20" rx=".9"/><rect x="65.80" y="72.72" width="2.20" height="6.96" rx=".9"/><\/g><g class="hs-n2"><rect x="48.32" y="64.00" width="6.36" height="2.20" rx=".9"/><rect x="53.80" y="65.32" width="2.20" height="6.96" rx=".9"/><rect x="48.32" y="71.40" width="6.36" height="2.20" rx=".9"/><rect x="47.00" y="72.72" width="2.20" height="6.96" rx=".9"/><rect x="48.32" y="78.80" width="6.36" height="2.20" rx=".9"/><rect x="59.00" y="65.32" width="2.20" height="6.96" rx=".9"/><rect x="60.32" y="71.40" width="6.36" height="2.20" rx=".9"/><rect x="65.80" y="65.32" width="2.20" height="6.96" rx=".9"/><rect x="65.80" y="72.72" width="2.20" height="6.96" rx=".9"/><\/g><\/g><g class="mh-val" data-val="hum" data-box="42 64 27.6 17" data-seg="9 17 2.2 .9 3" data-align="right"><\/g><\/g><g fill="none" stroke="#2b3034" stroke-width="1.5"><circle cx="73.6" cy="67.5" r="2"/><circle cx="79.4" cy="77.5" r="2"/><\/g><path d="M80.4 65.5l-7.8 14" stroke="#2b3034" stroke-width="1.5" stroke-linecap="round"/><path d="M33 52a32 32 0 0 1 30-23v6a26 26 0 0 0-24 20z" fill="url(#ID-refl)"/><g fill="#aab2bb"><circle cx="56" cy="103.5" r="1"/><circle cx="60" cy="104.3" r="1"/><circle cx="64" cy="104.6" r="1"/><circle cx="68" cy="104.3" r="1"/><circle cx="72" cy="103.5" r="1"/><\/g>',k:'.mh-humidity_sensor .hs-humid,.mh-humidity_sensor .hs-dry,.mh-humidity_sensor .hs-n1,.mh-humidity_sensor .hs-n2{opacity:0;transition:opacity .5s}.mh-humidity_sensor .hs-fill{transform-box:view-box;transform-origin:64px 58px;transform:scaleY(.5);transition:transform .8s,fill .5s}.mh-humidity_sensor.is-on .hs-n0{opacity:0}.mh-humidity_sensor.is-humid .hs-humid{opacity:1;animation:mh-breathe 2.6s ease-in-out infinite}.mh-humidity_sensor.is-humid .hs-n1{opacity:1}.mh-humidity_sensor.is-humid .hs-fill{fill:#1f7fe0;animation:mh-humidity-sensor-humid 2.6s ease-in-out infinite}.mh-humidity_sensor.is-dry .hs-dry{opacity:1;animation:mh-breathe 2.6s ease-in-out infinite}.mh-humidity_sensor.is-dry .hs-n2{opacity:1}.mh-humidity_sensor.is-dry .hs-fill{fill:#d98a12;animation:mh-humidity-sensor-dry 2.6s ease-in-out infinite}@keyframes mh-humidity-sensor-humid{0%,100%{transform:scaleY(.86)}50%{transform:scaleY(.95)}}@keyframes mh-humidity-sensor-dry{0%,100%{transform:scaleY(.22)}50%{transform:scaleY(.16)}}',f:['mh-breathe']},motion_sensor:{n:'Motion sensor',c:'sensors',d:'PIR motion sensor: when motion is detected a warm heat spot sweeps across the faceted lens like a person walking past, the dome glows and the LED blinks amber.',s:[['clear',''],['detected','is-detected']],v:'15.9 3.9 96.2 96.2',b:'<defs><linearGradient id="ID-body" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".5" stop-color="#f1f3f5"/><stop offset="1" stop-color="#bcc3cb"/><\/linearGradient><linearGradient id="ID-rim" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#c3cad2"/><stop offset=".5" stop-color="#eef1f4"/><stop offset="1" stop-color="#ffffff"/><\/linearGradient><radialGradient id="ID-dome" cx=".36" cy=".32" r=".8"><stop offset="0" stop-color="#ffffff"/><stop offset=".5" stop-color="#e9ecef"/><stop offset="1" stop-color="#b9c0c8"/><\/radialGradient><radialGradient id="ID-heat" cx=".5" cy=".55" r=".55"><stop offset="0" stop-color="#ffe2a8" stop-opacity=".95"/><stop offset=".55" stop-color="#ffb13b" stop-opacity=".7"/><stop offset="1" stop-color="#ffb13b" stop-opacity="0"/><\/radialGradient><pattern id="ID-facet" patternUnits="userSpaceOnUse" width="5" height="5" patternTransform="rotate(45 64 50)"><rect width="5" height="5" fill="#fff" fill-opacity="0"/><path d="M0 0h5v5" fill="none" stroke="#8d96a1" stroke-opacity=".22" stroke-width=".7"/><path d="M.6 .6h3.6" stroke="#fff" stroke-opacity=".55" stroke-width=".6"/><\/pattern><radialGradient id="ID-spot" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#fff1d0" stop-opacity=".95"/><stop offset=".5" stop-color="#ffb13b" stop-opacity=".55"/><stop offset="1" stop-color="#ffb13b" stop-opacity="0"/><\/radialGradient><clipPath id="ID-dc"><circle cx="64" cy="50" r="26.6"/><\/clipPath><filter id="ID-blur" x="-1" y="-1" width="3" height="3"><feGaussianBlur stdDeviation="2.2"/><\/filter><filter id="ID-tiny" x="-.5" y="-.5" width="2" height="2"><feGaussianBlur stdDeviation="1.4"/><\/filter><filter id="ID-soft" x="-.2" y="-.2" width="1.4" height="1.4"><feGaussianBlur stdDeviation="2"/><\/filter><\/defs><rect x="28" y="18" width="76" height="76" rx="23" fill="#000" opacity=".24" filter="url(#ID-soft)"/><rect x="26" y="14" width="76" height="76" rx="23" fill="url(#ID-body)" stroke="#9aa3ad" stroke-width="1"/><rect x="28" y="16" width="72" height="72" rx="21.5" fill="none" stroke="#fff" stroke-opacity=".9" stroke-width="1"/><circle cx="64" cy="50" r="30.5" fill="url(#ID-rim)" stroke="#b3bbc4" stroke-width=".6"/><circle cx="64" cy="50" r="27" fill="url(#ID-dome)" stroke="#a9b1ba" stroke-width=".7"/><circle cx="64" cy="50" r="26.5" fill="url(#ID-facet)"/><g fill="none" stroke-width="1.6"><circle cx="64" cy="50" r="9" stroke="#aab2bb" stroke-opacity=".4"/><circle cx="64" cy="50" r="17" stroke="#aab2bb" stroke-opacity=".32"/><\/g><circle class="ms-heat" cx="64" cy="50" r="26" fill="url(#ID-heat)"/><g clip-path="url(#ID-dc)"><ellipse class="ms-spot" cx="64" cy="52" rx="11" ry="17" fill="url(#ID-spot)"/><\/g><ellipse cx="54" cy="37" rx="10" ry="5.5" fill="#fff" opacity=".85" transform="rotate(-35 54 37)" filter="url(#ID-tiny)"/><circle cx="64" cy="84.5" r="2.2" fill="#d3d9df" stroke="#a7b0ba" stroke-width=".6"/><circle class="ms-ledglow" cx="64" cy="84.5" r="5" fill="#ffb13b" filter="url(#ID-blur)"/><circle class="ms-led" cx="64" cy="84.5" r="1.5" fill="#ffb13b"/>',k:'.mh-motion_sensor .ms-heat,.mh-motion_sensor .ms-ledglow{opacity:0;transition:opacity .4s}.mh-motion_sensor .ms-led{fill:#c3cad2}.mh-motion_sensor .ms-spot{opacity:0;transform-box:view-box}.mh-motion_sensor.is-detected .ms-heat{opacity:.7;animation:mh-breathe 2.4s ease-in-out infinite}.mh-motion_sensor.is-detected .ms-spot{animation:mh-motion-sensor-cross 2.4s ease-in-out infinite}.mh-motion_sensor.is-detected .ms-led{fill:#ffb13b}.mh-motion_sensor.is-detected .ms-ledglow{opacity:.9;animation:mh-blink 1s ease-in-out infinite}@keyframes mh-motion-sensor-cross{0%{opacity:0;transform:translateX(-26px)}20%{opacity:1}80%{opacity:1}100%{opacity:0;transform:translateX(26px)}}',f:['mh-blink','mh-breathe']},temperature_sensor:{n:'Temperature sensor',c:'sensors',d:'Small temperature sensor: the display shows a thermometer and reading; it tints red with a rising column when hot, and blue with a low column when cold.',s:[['normal',''],['hot','is-on is-hot'],['cold','is-on is-cold']],v:'5.6 7.8 116.9 116.9',b:'<defs><radialGradient id="ID-shadow"><stop offset="0" stop-color="#000" stop-opacity=".3"/><stop offset="1" stop-color="#000" stop-opacity="0"/><\/radialGradient><linearGradient id="ID-body" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".6" stop-color="#eef1f4"/><stop offset="1" stop-color="#cdd3da"/><\/linearGradient><linearGradient id="ID-side" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c9d0d7"/><stop offset="1" stop-color="#9ea7b1"/><\/linearGradient><linearGradient id="ID-lcd" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e9ece6"/><stop offset="1" stop-color="#c9cfc7"/><\/linearGradient><linearGradient id="ID-hot" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffd3cf"/><stop offset="1" stop-color="#ff8f86"/><\/linearGradient><linearGradient id="ID-cold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d6ecff"/><stop offset="1" stop-color="#8cc4ff"/><\/linearGradient><linearGradient id="ID-refl" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".45"/><stop offset=".45" stop-color="#fff" stop-opacity="0"/><\/linearGradient><\/defs><ellipse cx="64" cy="117" rx="44" ry="4" fill="url(#ID-shadow)"/><rect x="21" y="25" width="86" height="88" rx="18" fill="url(#ID-side)"/><rect x="21" y="20" width="86" height="88" rx="18" fill="url(#ID-body)" stroke="#b6bdc5" stroke-width="1"/><path d="M28 34a14 14 0 0 1 12-10h48" stroke="#fff" stroke-width="2" stroke-linecap="round" fill="none"/><rect x="31" y="30" width="66" height="62" rx="7" fill="#9aa39a" opacity=".5"/><rect x="32" y="31" width="64" height="60" rx="6" fill="url(#ID-lcd)"/><rect class="ts-hot" x="32" y="31" width="64" height="60" rx="6" fill="url(#ID-hot)"/><rect class="ts-cold" x="32" y="31" width="64" height="60" rx="6" fill="url(#ID-cold)"/><rect x="41" y="40" width="9" height="40" rx="4.5" fill="none" stroke="#2b3034" stroke-width="1.6"/><circle cx="45.5" cy="81" r="6.6" fill="#e3e6e1" stroke="#2b3034" stroke-width="1.6"/><rect class="ts-col" x="43" y="57" width="5" height="25" rx="1.5" fill="#2b3034"/><circle class="ts-bulb" cx="45.5" cy="81" r="4.4" fill="#2b3034"/><g fill="#2b3034" opacity=".7"><rect x="51.5" y="44" width="3" height="1.2"/><rect x="51.5" y="52" width="3" height="1.2"/><rect x="51.5" y="60" width="3" height="1.2"/><rect x="51.5" y="68" width="3" height="1.2"/><\/g><g fill="#2b3034"><g class="mh-sample"><g class="ts-n0"><rect x="59.56" y="46.00" width="7.88" height="2.60" rx="1"/><rect x="66.40" y="47.56" width="2.60" height="9.18" rx="1"/><rect x="59.56" y="55.70" width="7.88" height="2.60" rx="1"/><rect x="58.00" y="57.26" width="2.60" height="9.18" rx="1"/><rect x="59.56" y="65.40" width="7.88" height="2.60" rx="1"/><rect x="74.56" y="46.00" width="7.88" height="2.60" rx="1"/><rect x="81.40" y="47.56" width="2.60" height="9.18" rx="1"/><rect x="74.56" y="55.70" width="7.88" height="2.60" rx="1"/><rect x="73.00" y="57.26" width="2.60" height="9.18" rx="1"/><rect x="74.56" y="65.40" width="7.88" height="2.60" rx="1"/><\/g><g class="ts-n1"><rect x="59.56" y="46.00" width="7.88" height="2.60" rx="1"/><rect x="66.40" y="47.56" width="2.60" height="9.18" rx="1"/><rect x="59.56" y="55.70" width="7.88" height="2.60" rx="1"/><rect x="66.40" y="57.26" width="2.60" height="9.18" rx="1"/><rect x="59.56" y="65.40" width="7.88" height="2.60" rx="1"/><rect x="81.40" y="47.56" width="2.60" height="9.18" rx="1"/><rect x="81.40" y="57.26" width="2.60" height="9.18" rx="1"/><\/g><g class="ts-n2"><rect x="66.40" y="47.56" width="2.60" height="9.18" rx="1"/><rect x="66.40" y="57.26" width="2.60" height="9.18" rx="1"/><rect x="74.56" y="46.00" width="7.88" height="2.60" rx="1"/><rect x="81.40" y="47.56" width="2.60" height="9.18" rx="1"/><rect x="74.56" y="55.70" width="7.88" height="2.60" rx="1"/><rect x="73.00" y="57.26" width="2.60" height="9.18" rx="1"/><rect x="74.56" y="65.40" width="7.88" height="2.60" rx="1"/><\/g><circle cx="89.5" cy="48.5" r="2.4" fill="none" stroke="#2b3034" stroke-width="1.5"/><\/g><g class="mh-val" data-val="temp" data-box="56 46 38 22" data-seg="11 22 2.6 1 4" data-align="center"><\/g><\/g><rect x="58" y="76" width="26" height="2" rx="1" fill="#2b3034" opacity=".35"/><path d="M32 31h30L44 91H32z" fill="url(#ID-refl)" opacity=".7"/><g fill="#aab2bb"><circle cx="54" cy="101" r="1"/><circle cx="59" cy="101" r="1"/><circle cx="64" cy="101" r="1"/><circle cx="69" cy="101" r="1"/><circle cx="74" cy="101" r="1"/><\/g>',k:'.mh-temperature_sensor .ts-hot,.mh-temperature_sensor .ts-cold,.mh-temperature_sensor .ts-n1,.mh-temperature_sensor .ts-n2{opacity:0;transition:opacity .5s}.mh-temperature_sensor .ts-col{transform-box:view-box;transform-origin:45.5px 82px;transform:scaleY(1);transition:transform .8s}.mh-temperature_sensor .ts-col,.mh-temperature_sensor .ts-bulb{transition:fill .5s}.mh-temperature_sensor.is-on .ts-n0{opacity:0}.mh-temperature_sensor.is-hot .ts-hot{opacity:1;animation:mh-breathe 2.4s ease-in-out infinite}.mh-temperature_sensor.is-hot .ts-n1{opacity:1}.mh-temperature_sensor.is-hot .ts-col{animation:mh-temperature-sensor-hot 2.4s ease-in-out infinite}.mh-temperature_sensor.is-hot .ts-col,.mh-temperature_sensor.is-hot .ts-bulb{fill:#e5383b}.mh-temperature_sensor.is-cold .ts-cold{opacity:1;animation:mh-breathe 2.4s ease-in-out infinite}.mh-temperature_sensor.is-cold .ts-n2{opacity:1}.mh-temperature_sensor.is-cold .ts-col{animation:mh-temperature-sensor-cold 2.4s ease-in-out infinite}.mh-temperature_sensor.is-cold .ts-col,.mh-temperature_sensor.is-cold .ts-bulb{fill:#1f7fe0}@keyframes mh-temperature-sensor-hot{0%,100%{transform:scaleY(1.44)}50%{transform:scaleY(1.52)}}@keyframes mh-temperature-sensor-cold{0%,100%{transform:scaleY(.5)}50%{transform:scaleY(.44)}}',f:['mh-breathe']},router:{n:'Router',c:'network',d:'Offline the status LED blinks red, online all front LEDs glow green, and during traffic the port LEDs flicker with data.',s:[['offline',''],['online','is-online'],['traffic','is-online is-traffic']],v:'-1.6 -4.4 131.2 131.2',b:'<defs><linearGradient id="ID-body" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".6" stop-color="#eceff3"/><stop offset="1" stop-color="#c3cad2"/><\/linearGradient><linearGradient id="ID-top" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#e6e9ed"/><stop offset=".4" stop-color="#ffffff"/><stop offset="1" stop-color="#d6dbe1"/><\/linearGradient><linearGradient id="ID-strip" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2e353d"/><stop offset="1" stop-color="#11151a"/><\/linearGradient><linearGradient id="ID-ant" x1="0" x2="1"><stop offset="0" stop-color="#4a525c"/><stop offset=".4" stop-color="#7a838e"/><stop offset="1" stop-color="#262b31"/><\/linearGradient><filter id="ID-ledg" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.4"/><\/filter><radialGradient id="ID-shadow"><stop offset="0" stop-color="#000" stop-opacity=".34"/><stop offset="1" stop-color="#000" stop-opacity="0"/><\/radialGradient><\/defs><ellipse cx="64" cy="106" rx="52" ry="4" fill="url(#ID-shadow)"/><g transform="rotate(-8 26 66)"><rect x="22.5" y="20" width="7" height="48" rx="3.5" fill="url(#ID-ant)" stroke="#20252b" stroke-width=".6"/><path d="M24.5 23v40" stroke="#fff" stroke-opacity=".3" stroke-width="1" stroke-linecap="round"/><\/g><g transform="rotate(8 102 66)"><rect x="98.5" y="20" width="7" height="48" rx="3.5" fill="url(#ID-ant)" stroke="#20252b" stroke-width=".6"/><path d="M100.5 23v40" stroke="#fff" stroke-opacity=".3" stroke-width="1" stroke-linecap="round"/><\/g><rect x="18" y="64" width="14" height="6" rx="2" fill="#3a414a"/><rect x="96" y="64" width="14" height="6" rx="2" fill="#3a414a"/><rect x="12" y="66" width="104" height="36" rx="9" fill="url(#ID-body)" stroke="#a9b1ba" stroke-width="1"/><path d="M12 78v-3a9 9 0 0 1 9-9h86a9 9 0 0 1 9 9v3z" fill="url(#ID-top)"/><path d="M14 78h100" stroke="#c4cad1" stroke-width="1"/><path d="M21 67.4h86" stroke="#fff" stroke-width="1.2" stroke-linecap="round"/><rect x="24" y="84" width="80" height="10" rx="5" fill="url(#ID-strip)"/><path d="M28 84.8h72" stroke="#fff" stroke-opacity=".18" stroke-width=".8" stroke-linecap="round"/><g class="rt-glow" filter="url(#ID-ledg)"><circle cx="36" cy="89" r="3.6"/><circle cx="50" cy="89" r="3.6"/><circle cx="64" cy="89" r="3.6"/><circle cx="78" cy="89" r="3.6"/><circle cx="92" cy="89" r="3.6"/><\/g><g class="rt-leds"><circle class="rt-pwr" cx="36" cy="89" r="2.4" fill="#ff4d4f"/><circle class="rt-l" cx="50" cy="89" r="2.4" fill="#3a414a"/><circle class="rt-l" cx="64" cy="89" r="2.4" fill="#3a414a"/><circle class="rt-l" cx="78" cy="89" r="2.4" fill="#3a414a"/><circle class="rt-l" cx="92" cy="89" r="2.4" fill="#3a414a"/><\/g>',k:'.mh-router .rt-glow{fill:#22c55e;opacity:0;transition:opacity .4s}.mh-router.is-online .rt-glow{opacity:.55;animation:mh-breathe 3s ease-in-out infinite}.mh-router.is-traffic .rt-glow{opacity:.35}.mh-router .rt-pwr{animation:mh-router-alarm 1s ease-in-out infinite}.mh-router.is-online .rt-pwr{fill:#22c55e;animation:mh-breathe 3s ease-in-out infinite}.mh-router.is-online .rt-l{fill:#22c55e}.mh-router.is-traffic .rt-l{fill:#5fe08a;animation:mh-router-led .9s steps(1) infinite}.mh-router.is-traffic .rt-l:nth-child(3){animation-duration:.7s;animation-delay:-.3s}.mh-router.is-traffic .rt-l:nth-child(4){animation-duration:1.1s;animation-delay:-.5s}.mh-router.is-traffic .rt-l:nth-child(5){animation-duration:.8s;animation-delay:-.2s}@keyframes mh-router-led{0%{opacity:1}50%{opacity:.25}}@keyframes mh-router-alarm{0%,100%{opacity:1}50%{opacity:.35}}',f:['mh-breathe']}};
const KEYFRAMES = {'mh-spin':'{to{transform:rotate(360deg)}}','mh-breathe':'{0%,100%{opacity:.7}50%{opacity:1}}','mh-blink':'{50%{opacity:.2}}','mh-slosh':'{0%,100%{transform:translateX(-3px)}50%{transform:translateX(3px)}}'};
const CATEGORIES = {lighting:'Lighting',climate:'Climate',kitchen:'Kitchen',laundry:'Laundry',cleaning:'Cleaning',security:'Security',sensors:'Sensors',energy:'Energy',garden:'Garden & outdoor',media:'Media',network:'Network',other:'Other'};
const STORE_URL = null;
const FULL_PACK = {ambience_bar_black:'Ambience light bar (black)',ambience_bar_white:'Ambience light bar (white)',bulb_classic:'Bulb (classic)',ceiling_light:'Ceiling light',chandelier:'Chandelier',christmas_tree:'Christmas tree',color_bulb:'Color bulb',corner_floor_lamp:'Corner floor lamp',curtain_lights:'Curtain lights',desk_lamp:'Desk lamp',dimmer_remote:'Dimmer remote',downlight:'Downlight',filament_bulb:'Filament bulb',floor_lamp:'Floor lamp',floor_lamp_classic:'Floor lamp (classic)',galaxy_projector:'Galaxy projector',garden_spotlight:'Garden spotlight',gradient_strip:'Gradient light strip',icicle_lights:'Icicle lights',led_panel:'LED panel',led_strip:'LED strip',light_bar:'Light bar',sync_box:'Light sync box',linear_light_classic:'Linear light (classic)',mirror_light:'Mirror light',neon_rope:'Neon rope light',night_light:'Night light',orb_table_lamp:'Orb table lamp',outdoor_light:'Outdoor light',outdoor_tree_lights:'Outdoor light tree',pendant_classic:'Pendant (classic)',pendant_cluster:'Pendant cluster',pendant_light:'Pendant light',permanent_outdoor_lights:'Permanent outdoor lights',portable_lamp:'Portable lamp',rotary_dimmer:'Rotary dimmer',flush_round_classic:'Round ceiling light (classic)',scene_switch:'Scene switch',gu10_spot_bulb:'Spot bulb',spot_classic:'Spotlight (classic)',track_lights:'Track lights',tv_backlight:'TV backlight',pendant_dual:'Up and down pendant',wall_sconce:'Wall sconce',wall_washer:'Wall washer',ac_split:'Air conditioner',air_purifier:'Air purifier',bathroom_fan:'Bathroom exhaust fan',bladeless_fan:'Bladeless fan',cassette_ac:'Cassette air conditioner',ceiling_fan_classic:'Ceiling fan (classic)',dehumidifier:'Dehumidifier',ducted_ac_vent:'Ducted AC slot vent',evaporative_cooler:'Evaporative cooler',fireplace:'Fireplace',floor_heating:'Floor heating thermostat',furnace:'Furnace',heat_pump:'Heat pump',heater_classic:'Heater (classic)',humidifier:'Humidifier',ceiling_fan_modern:'Modern ceiling fan',pellet_stove:'Pellet stove',radiator:'Radiator',smart_vent:'Smart vent',space_heater:'Space heater',standing_fan:'Standing fan',thermostat:'Thermostat',towel_warmer:'Towel warmer',tower_fan:'Tower fan',window_ac:'Window AC',air_fryer:'Air fryer',blender:'Blender',bread_maker:'Bread maker',chest_freezer:'Chest freezer',coffee_grinder:'Coffee grinder',countertop_oven:'Countertop oven',dishwasher:'Dishwasher',drip_coffee_maker:'Drip coffee maker',dual_air_fryer:'Dual air fryer',egg_cooker:'Egg cooker',pizza_oven:'Electric pizza oven',espresso_machine:'Espresso machine',espresso_classic:'Espresso machine (classic)',food_processor:'Food processor',french_door_fridge:'French door fridge',fridge:'Fridge',garbage_disposal:'Garbage disposal',ice_cream_maker:'Ice cream maker',ice_maker:'Ice maker',indoor_grill:'Indoor grill',induction_hob:'Induction hob',juicer:'Juicer',microwave:'Microwave',milk_frother:'Milk frother',multicooker:'Multicooker',oven:'Oven',portable_blender:'Portable blender',pressure_cooker:'Pressure cooker',range_hood:'Range hood',rice_cooker:'Rice cooker',glass_door_fridge:'See-through door fridge',slushie_maker:'Slushie maker',smart_fridge_screen:'Smart fridge with screen',soup_maker:'Soup maker',sous_vide:'Sous vide',soda_tap:'Sparkling water tap',stand_mixer:'Stand mixer',steam_oven:'Steam oven',toaster:'Toaster',waffle_maker:'Waffle maker',water_dispenser:'Water dispenser',wine_fridge:'Wine fridge',yogurt_maker:'Yogurt maker',dryer:'Dryer',top_load_washer:'Top load washer',washer_dryer_stack:'Washer dryer stack',washing_machine:'Washing machine',robot_mop:'Robot mop',robot_vacuum:'Robot vacuum',robot_vacuum_classic:'Robot vacuum (classic)',window_robot:'Window cleaning robot',alarm_panel:'Alarm panel',door_chime:'Door chime',doorbell_classic:'Doorbell (classic)',fingerprint_lock:'Fingerprint lock',fire_sprinkler:'Fire sprinkler',front_door:'Front door',garage_door:'Garage door',garage_door_opener:'Garage door opener',gate:'Gate',house_status:'Home status',house_classic:'House (classic)',indoor_camera:'Indoor camera',siren:'Indoor siren',intercom:'Intercom',keypad_classic:'Keypad (classic)',lock_classic:'Lock (classic)',outdoor_siren:'Outdoor siren',panic_button:'Panic button',ptz_camera:'PTZ dome camera',security_camera:'Security camera',key_lockbox:'Smart key lockbox',smart_safe:'Smart safe',swing_gate:'Swing gate',video_doorbell:'Video doorbell',nvr_recorder:'Video recorder (NVR)',auto_shutoff_valve:'Water shutoff valve',window:'Window',co_detector:'CO detector',co2_monitor:'CO2 monitor',gas_detector:'Gas detector',glass_break_sensor:'Glass break sensor',plant_sensor:'Plant sensor',smoke_detector:'Smoke detector',vibration_sensor:'Vibration sensor',water_leak:'Water leak sensor',window_sensor:'Window sensor',battery_level:'Battery level',battery_wall:'Battery wall',electrical_panel:'Electrical panel',energy_flow:'Energy flow',energy_meter:'Energy meter',energy_monitor:'Energy monitor',ev_charger:'EV charger',heat_pump_water_heater:'Heat pump water heater',home_battery:'Home battery',power_strip:'Power strip',propane_tank:'Propane tank',solar_inverter:'Solar inverter',solar_panel:'Solar panel',solar_water_heater:'Solar water heater',generator:'Standby generator',tankless_water_heater:'Tankless water heater',ups:'UPS',water_heater:'Water heater',boiler_switch:'Water heater switch',wireless_charger:'Wireless charger',bird_feeder_camera:'Bird feeder camera',fire_pit:'Fire pit',floodlight_camera:'Floodlight camera',fountain_classic:'Fountain (classic)',greenhouse_vent:'Greenhouse roof vent',hose_timer:'Hose tap timer',hot_tub:'Hot tub',irrigation_controller:'Irrigation controller',irrigation_zones:'Irrigation zones',pergola_louvers:'Louvered pergola',mailbox:'Mailbox',path_lights:'Path lights',patio_heater:'Patio heater',bbq_smoker:'Pellet smoker',pond_pump:'Pond pump',pool_heater:'Pool heat pump',pool_pump:'Pool pump',pool_robot:'Pool robot',rain_sensor:'Rain sensor',lawn_mower:'Robot lawn mower',rock_speaker:'Rock speaker',pool_chlorinator:'Salt chlorinator',sauna:'Sauna',solar_garden_light:'Solar garden light',sprinkler:'Sprinkler',string_lights:'String lights',trash_bin:'Trash bin',water_tank:'Water tank level',water_valve:'Water valve',weather_station:'Weather station',taboon:'Wood-fired oven',amp_classic:'Amplifier (classic)',av_receiver:'AV receiver',bookshelf_speaker:'Bookshelf speaker',bookshelf_speakers_pair:'Bookshelf speakers pair',ceiling_speaker:'Ceiling speaker',dab_radio:'DAB radio',floor_speaker:'Floor speaker',floor_speakers_pair:'Floor speakers pair',game_console:'Game console',handheld_console:'Handheld console',hifi_streamer:'Hi-fi streamer',motorized_screen:'Motorized projector screen',portable_speaker:'Portable speaker',projector:'Projector',smart_display:'Smart display',speaker:'Smart speaker',smart_speaker_modern:'Smart speaker (modern)',soundbar:'Soundbar',speaker_classic:'Speaker (classic)',stereo_amplifier:'Stereo amplifier',media_player_box:'Streaming box',streaming_stick:'Streaming stick',subwoofer:'Subwoofer',tube_amplifier:'Tube amplifier',turntable:'Turntable',tv:'TV',voice_assistant:'Voice assistant',printer_3d:'3D printer',access_point:'Access point',computer:'Computer',laptop:'Laptop',mesh_wifi:'Mesh Wi-Fi',mini_pc:'Mini PC',modem:'Modem',nas:'NAS server',network_switch:'Network switch',printer:'Printer',smart_hub:'Smart hub',tablet:'Tablet',aquarium:'Aquarium',awning:'Awning',baby_monitor:'Baby monitor',blinds_classic:'Blinds (classic)',car:'Car',car_classic:'Car (classic)',curtains:'Curtains',ebike:'E-bike',electric_recliner:'Electric recliner',electric_toothbrush:'Electric toothbrush',exercise_bike:'Exercise bike',gas_meter:'Gas meter',massage_chair:'Massage chair',person_presence:'Person presence',pet_camera_treat:'Pet camera with treat toss',pet_door:'Pet door',pet_feeder:'Pet feeder',pet_fountain:'Pet fountain',roller_shutter:'Roller shutter',rowing_machine:'Rowing machine',litter_box:'Self-cleaning litter box',skylight_window:'Skylight window',smart_bassinet:'Smart bassinet',smart_bed:'Smart bed',smart_button:'Smart button',smart_mirror:'Smart mirror',smart_scale:'Smart scale',stairlift:'Stairlift',sump_pump:'Sump pump',treadmill:'Treadmill',blinds:'Venetian blinds',wall_tablet:'Wall tablet',water_meter:'Water meter',water_softener:'Water softener',weather:'Weather',weather_classic:'Weather (classic)'};      // sampler only: names of the icons that ship in the full pack (names only, no artwork)

/* =====================================================================================
   1. ICON GUESSING  (used when the card config has no `icon`)
   Order: device_class table, then name keywords (entity id + friendly name), then domain default.
   ===================================================================================== */
const DEVICE_CLASS_ICON = {
  binary_sensor: { smoke: 'smoke_detector', gas: 'smoke_detector', carbon_monoxide: 'smoke_detector', heat: 'smoke_detector',
    moisture: 'water_leak', motion: 'motion_sensor', occupancy: 'motion_sensor', presence: 'person_presence',
    door: 'door_sensor', garage_door: 'garage_door', opening: 'door_sensor', window: 'window_sensor', vibration: 'vibration_sensor',
    lock: 'door_lock', plug: 'smart_plug', power: 'smart_plug', battery_charging: 'ev_charger', sound: 'baby_monitor' },
  sensor: { temperature: 'temperature_sensor', humidity: 'humidity_sensor', carbon_dioxide: 'co2_monitor', moisture: 'plant_sensor',
    power: 'energy_monitor', energy: 'energy_meter', gas: 'gas_meter', water: 'water_meter' },
  cover: { garage: 'garage_door', gate: 'gate', blind: 'blinds', curtain: 'curtains', shutter: 'roller_shutter', shade: 'roller_shutter',
    awning: 'awning', window: 'window', door: 'front_door', damper: 'smart_vent' },
  media_player: { tv: 'tv', speaker: 'speaker', receiver: 'av_receiver' },
  switch: { outlet: 'smart_plug', switch: 'wall_switch' },
  humidifier: { dehumidifier: 'dehumidifier', humidifier: 'humidifier' },
  valve: { water: 'water_valve', gas: 'water_valve' },
};
// Name keywords, first match wins. Put specific phrases before general ones ("dishwasher" before "washer").
const NAME_ICON = [
  [/up.?down|dual pendant/, 'pendant_dual'], [/pendant/, 'pendant_light'], [/ceiling fan/, 'ceiling_fan'], [/ceiling speaker/, 'ceiling_speaker'],
  [/ceiling|chandelier/, 'ceiling_light'], [/downlight|spot|recessed/, 'downlight'], [/floor lamp/, 'floor_lamp'],
  [/christmas|xmas/, 'christmas_tree'], [/string light|fairy|festoon/, 'string_lights'], [/path/, 'path_lights'],
  [/strip|led|ambilight|backlight/, 'led_strip'], [/lamp|desk light|bedside|nightstand/, 'table_lamp'],
  [/porch|garden light|patio light|outdoor light|exterior|facade|yard light/, 'outdoor_light'], [/bulb/, 'bulb'],
  [/thermostat|nest|ecobee|tado/, 'thermostat'], [/heat ?pump/, 'heat_pump'], [/radiator|trv/, 'radiator'], [/furnace|boiler/, 'furnace'],
  [/fireplace/, 'fireplace'], [/patio heater/, 'patio_heater'], [/heater/, 'space_heater'], [/window ac|window air/, 'window_ac'],
  [/dehumidifier/, 'dehumidifier'], [/humidifier/, 'humidifier'], [/purifier|air clean/, 'air_purifier'], [/hood|extractor/, 'range_hood'],
  [/stand(ing)? fan|pedestal|tower fan|desk fan/, 'standing_fan'], [/fan/, 'ceiling_fan'],
  [/dishwasher/, 'dishwasher'], [/dryer|tumble/, 'dryer'], [/washer|washing|laundry/, 'washing_machine'],
  [/kettle/, 'kettle'], [/coffee|espresso/, 'espresso_machine'], [/microwave/, 'microwave'], [/air ?fryer/, 'air_fryer'], [/oven/, 'oven'],
  [/wine/, 'wine_fridge'], [/freezer/, 'chest_freezer'], [/fridge|refrigerator/, 'fridge'], [/toaster/, 'toaster'], [/ice maker/, 'ice_maker'],
  [/apple tv|chromecast|shield|fire tv|roku|streamer|streaming/, 'media_player_box'], [/soundbar/, 'soundbar'], [/subwoofer|\bsub\b/, 'subwoofer'],
  [/receiver|avr|denon|marantz/, 'av_receiver'], [/amplifier|\bamp\b/, 'stereo_amplifier'], [/projector/, 'projector'], [/\btv\b|television/, 'tv'],
  [/playstation|xbox|ps5|console|nintendo/, 'game_console'], [/sonos|speaker|homepod|echo|nest audio/, 'speaker'],
  [/3d printer|prusa|bambu/, 'printer_3d'], [/printer/, 'printer'], [/router|wifi|wi-fi|mesh|eero|deco/, 'mesh_wifi'], [/nas|synology|qnap/, 'nas'],
  [/computer|\bpc\b|desktop|imac|mac mini/, 'computer'], [/doorbell/, 'video_doorbell'], [/intercom/, 'intercom'], [/camera|\bcam\b/, 'security_camera'],
  [/alarm/, 'alarm_panel'], [/smoke/, 'smoke_detector'], [/leak|flood/, 'water_leak'], [/garage/, 'garage_door'], [/gate/, 'gate'],
  [/blind/, 'blinds'], [/curtain|drape/, 'curtains'], [/awning/, 'awning'], [/shutter|roller/, 'roller_shutter'], [/window/, 'window'],
  [/front door|door/, 'front_door'], [/lock/, 'door_lock'],
  [/vacuum|roborock|roomba|deebot|dreame/, 'robot_vacuum'], [/mower/, 'lawn_mower'], [/pool robot/, 'pool_robot'], [/pool/, 'pool_pump'],
  [/hot tub|spa|jacuzzi/, 'hot_tub'], [/sauna/, 'sauna'], [/sump/, 'sump_pump'], [/pond/, 'pond_pump'], [/sprinkler/, 'sprinkler'],
  [/irrigation/, 'irrigation_zones'], [/valve/, 'water_valve'], [/ev charger|wallbox|charger|easee|zappi/, 'ev_charger'], [/solar|\bpv\b|inverter/, 'solar_panel'],
  [/powerwall|home battery/, 'home_battery'], [/generator/, 'generator'], [/\bups\b/, 'ups'], [/water heater|geyser|boiler/, 'water_heater'],
  [/aquarium|fish tank/, 'aquarium'], [/litter/, 'litter_box'], [/feeder/, 'pet_feeder'], [/mailbox|letterbox/, 'mailbox'],
  [/trash|bin|garbage|waste/, 'trash_bin'], [/plug|outlet|socket/, 'smart_plug'], [/switch/, 'wall_switch'],
];
// Which kinds a domain may become through name keywords (so "laundry room light" stays a light).
const DOMAIN_SCOPE = {
  light: ['lighting'], fan: ['air_purifier', 'range_hood', 'standing_fan', 'ceiling_fan'],
  climate: ['climate'], cover: ['garage_door', 'gate', 'blinds', 'curtains', 'awning', 'roller_shutter', 'window', 'front_door', 'smart_vent', 'pet_door'],
  media_player: ['media'], lock: ['door_lock'], vacuum: ['robot_vacuum', 'pool_robot'],
};
const DOMAIN_ICON = {
  climate: 'ac_split', fan: 'ceiling_fan', light: 'bulb', cover: 'roller_shutter', lock: 'door_lock', vacuum: 'robot_vacuum',
  lawn_mower: 'lawn_mower', media_player: 'speaker', alarm_control_panel: 'alarm_panel', water_heater: 'water_heater', humidifier: 'humidifier',
  person: 'person_presence', device_tracker: 'person_presence', valve: 'water_valve', camera: 'security_camera', binary_sensor: 'motion_sensor',
  switch: 'smart_plug', input_boolean: 'wall_switch', button: 'smart_button', input_button: 'smart_button', assist_satellite: 'voice_assistant',
  siren: 'alarm_panel', event: 'smart_button', update: 'router', remote: 'media_player_box', weather: 'weather',
};

function guessIcon(entityId, stateObj) {
  const domain = String(entityId || '').split('.')[0];
  const a = (stateObj && stateObj.attributes) || {};
  const dc = DEVICE_CLASS_ICON[domain] && DEVICE_CLASS_ICON[domain][a.device_class];
  const text = ((entityId || '').split('.')[1] + ' ' + (a.friendly_name || '')).toLowerCase().replace(/_/g, ' ');
  const scope = DOMAIN_SCOPE[domain];
  const allowed = (k) => !scope || scope.includes(k) || scope.includes(ICONS[k] && ICONS[k].c);
  if (dc && ICONS[dc] && !(domain === 'cover' || domain === 'media_player')) return dc;
  for (const [re, kind] of NAME_ICON) if (ICONS[kind] && allowed(kind) && re.test(text)) return kind;
  if (dc && ICONS[dc]) return dc;
  return DOMAIN_ICON[domain] && ICONS[DOMAIN_ICON[domain]] ? DOMAIN_ICON[domain] : 'smart_plug';
}

/* =====================================================================================
   2. STATE MAPPING  (HA entity state -> Animara state label)
   Resolution order, first hit wins:
     a. card config `states:` (manual map, raw HA state -> label)
     b. KIND_RULES[kind](ctx)       attribute-aware logic (climate, fans, lights, numeric sensors)
     c. KIND_WORDS[kind]            label -> words that integrations report for it (washer, dryer, vacuum ...)
     d. the HA state equals a label of the icon ("open", "docked", "playing" ...)
     e. DOMAIN_WORDS[domain][state] candidate labels in priority order
     f. fallback: 'on' (or the first active state) when the entity is on, else the first (resting) state.
   States are normalized: lower case, last segment after a dot ("BSH.Common.EnumType.OperationState.Run" -> "run"),
   spaces and dashes -> "_". To extend: add words to KIND_WORDS or a function to KIND_RULES.
   ===================================================================================== */
const KIND_WORDS = {
  washing_machine: {
    washing: 'wash washing main_wash mainwash prewash pre_wash soak soaking run running in_use active on start started detecting weight_sensing sensing heating program_running',
    rinsing: 'rinse rinsing rinse_hold',
    spinning: 'spin spinning drain draining drying dry',
    paused: 'pause paused delay delayed delay_start delayed_start waiting',
    done: 'done finish finished end ended complete completed cycle_complete program_ended cycle_finished',
    off: 'off idle standby ready none initial power_off stop stopped inactive',
  },
  dryer: {
    tumbling: 'dry drying tumbling tumble run running in_use active on start started heating program_running',
    cooling: 'cool cooling cool_down cooldown cooling_down anti_crease anti_wrinkle wrinkle_prevent wrinkle_care',
    done: 'done finish finished end ended complete completed cycle_complete program_ended',
    off: 'off idle standby ready none initial power_off stop stopped inactive pause paused',
  },
  dishwasher: {
    washing: 'wash washing main_wash prewash pre_wash rinse rinsing run running in_use active on start started heating program_running',
    drying: 'dry drying final_dry',
    done: 'done finish finished end ended complete completed cycle_complete program_ended',
    off: 'off idle standby ready none initial power_off stop stopped inactive pause paused',
  },
  robot_vacuum: { cleaning: 'cleaning on running vacuuming mopping segment_cleaning zone_cleaning spot_cleaning room_cleaning',
    returning: 'returning returning_home return_to_base going_home', error: 'error stuck', docked: 'docked charging idle off paused' },
  lawn_mower: { mowing: 'mowing cleaning on running', returning: 'returning returning_home', error: 'error stuck', docked: 'docked charging idle off paused' },
  alarm_panel: { armed: 'armed_home armed_away armed_night armed_vacation armed_custom_bypass armed', arming: 'arming pending',
    triggered: 'triggered', disarmed: 'disarmed disarming off' },
  person_presence: { home: 'home on true', away: 'not_home away off false' },
  ev_charger: { charging: 'charging on charging_started', done: 'done complete completed finished fully_charged charged',
    idle: 'idle off disconnected connected plugged awaiting_start awaiting_authorization ready available' },
  ups: { on_battery: 'ob on_battery onbatt discharging', online: 'ol online on_line charging' },
  security_camera: { recording: 'recording', motion: 'motion detected on', idle: 'idle streaming off' },
  voice_assistant: { listening: 'listening processing wake_word', speaking: 'responding speaking', idle: 'idle' },
  espresso_machine: { brewing: 'brew brewing extracting extraction pouring dispensing grinding making running in_use',
    ready: 'on ready heated warm idle_ready', off: 'off standby sleep sleeping eco idle heating_up' },
  espresso_classic: { brewing: 'brew brewing extracting extraction pouring dispensing grinding making running in_use',
    ready: 'on ready heated warm idle_ready', off: 'off standby sleep sleeping eco idle heating_up' },
  drip_coffee_maker: { brewing: 'on brew brewing dripping making running in_use', off: 'off standby idle ready keep_warm done' },
  weather: { sunny: 'sunny', partly_cloudy: 'partlycloudy partly_cloudy', cloudy: 'cloudy', rain: 'rainy pouring rain',
    storm: 'lightning lightning_rainy hail exceptional', snow: 'snowy snowy_rainy snow', fog: 'fog foggy', windy: 'windy windy_variant',
    clear_night: 'clear_night' },
  blinds_classic: { open: 'open extended', moving: 'opening closing moving', closed: 'closed retracted' },
  robot_vacuum_classic: { cleaning: 'cleaning returning running on mopping', docked: 'docked idle charging paused off' },
  speaker_classic: { playing: 'playing buffering' },
  lock_classic: { unlocked: 'unlocked open opening unlocking jammed', locked: 'locked locking' },
  weather_classic: { sunny: 'sunny', partly_cloudy: 'partlycloudy partly_cloudy', cloudy: 'cloudy fog foggy windy windy_variant',
    rain: 'rainy pouring rain lightning lightning_rainy hail snowy snowy_rainy snow exceptional', night: 'clear_night' },
};

const DOMAIN_WORDS = {
  cover: { open: 'open extended', closed: 'closed retracted', opening: 'opening moving open extended', closing: 'closing moving closed retracted' },
  lock: { locked: 'locked closed', unlocked: 'unlocked closed open', locking: 'locked closed', unlocking: 'unlocked open', open: 'unlocked open', opening: 'unlocked open', jammed: 'jammed error' },
  media_player: { playing: 'playing on', paused: 'paused on', buffering: 'playing on', on: 'on paused', idle: 'on paused' },
  valve: { open: 'open', closed: 'closed', opening: 'open', closing: 'closed' },
  water_heater: { eco: 'heating on', electric: 'heating on', gas: 'heating on', heat_pump: 'heating on', high_demand: 'heating on', performance: 'heating on' },
  camera: { recording: 'recording', streaming: 'idle', idle: 'idle' },
};

const ON_WORDS = new Set(['on', 'true', 'home', 'open', 'active', 'detected', 'running', 'playing', 'heat', 'cool', 'auto', 'heat_cool', 'dry', 'fan_only', 'cleaning', 'charging']);
const OFF_WORDS = new Set(['off', 'false', 'unavailable', 'unknown', 'none', '']);

function climateRule(c) {
  if (c.domain !== 'climate') return;
  const act = norm(c.a.hvac_action);
  if (c.s === 'off' || act === 'off') return c.first;
  const has = (l) => c.labels.includes(l);
  if (act === 'idle') { if (has('idle')) return 'idle'; if (!has('cooling')) return c.first; }
  const g = { cooling: 'cooling', heating: 'heating', preheating: 'heating', defrosting: 'heating', drying: 'dry', fan: 'fan' }[act]
    || { cool: 'cooling', heat: 'heating', dry: 'dry', fan_only: 'fan', heat_cool: 'cooling', auto: 'cooling' }[c.s];
  const cand = { cooling: 'cooling running on', heating: 'heating running on fan', dry: 'dry cooling running on', fan: 'fan running on idle' }[g];
  return cand ? pick(c.labels, cand) : undefined;
}
function fanRule(c) {
  if (!c.on) return c.first;
  const pct = Number(c.a.percentage), preset = norm(c.a.preset_mode);
  if (c.domain === 'light') return pick(c.labels, 'light on');
  if (c.kind === 'ceiling_fan') return Number.isFinite(pct) && pct > 0 && pct <= 50 ? 'low' : 'high';
  if (c.kind === 'standing_fan') return c.a.oscillating ? 'oscillating' : 'on';
  if (c.kind === 'air_purifier') return (Number.isFinite(pct) && pct > 66) || /high|turbo|max|boost/.test(preset) ? 'high' : 'on';
  if (c.kind === 'range_hood') return 'fan';
}
function lightRule(c) {
  if (c.domain !== 'light' && c.domain !== 'switch' && c.domain !== 'input_boolean') return;
  if (!c.on) return c.first;
  if (c.kind === 'led_strip') return /rainbow|colorloop|color_loop|cycle|loop/.test(norm(c.a.effect)) ? 'color' : 'on';
  if (c.kind === 'pendant_dual') return 'both';
  return pick(c.labels, 'on');
}
const numeric = (fn) => (c) => (Number.isFinite(c.num) ? fn(c.num, c) : undefined);
const celsius = (n, c) => (/f/i.test(c.a.unit_of_measurement || '') ? (n - 32) / 1.8 : n);
const KIND_RULES = {
  ac_split: climateRule, window_ac: climateRule, heat_pump: climateRule, thermostat: climateRule, furnace: climateRule,
  radiator: climateRule, space_heater: climateRule, fireplace: climateRule,
  ceiling_fan: fanRule, standing_fan: fanRule, air_purifier: fanRule, range_hood: fanRule,
  bulb: lightRule, ceiling_light: lightRule, downlight: lightRule, floor_lamp: lightRule, table_lamp: lightRule, pendant_light: lightRule,
  pendant_dual: lightRule, led_strip: lightRule, outdoor_light: lightRule, christmas_tree: lightRule, string_lights: lightRule, path_lights: lightRule,
  temperature_sensor: numeric((n, c) => { const t = celsius(n, c); return t >= 28 ? 'hot' : t <= 16 ? 'cold' : 'normal'; }),
  humidity_sensor: numeric((n) => (n >= 65 ? 'humid' : n < 30 ? 'dry' : 'normal')),
  co2_monitor: numeric((n) => (n >= 1200 ? 'poor' : n >= 800 ? 'moderate' : 'good')),
  plant_sensor: numeric((n) => (n < 20 ? 'thirsty' : 'ok')),
  propane_tank: numeric((n) => (n > 60 ? 'full' : n > 25 ? 'half' : 'low')),
  bulb_classic: lightRule, floor_lamp_classic: lightRule, spot_classic: lightRule, linear_light_classic: lightRule, flush_round_classic: lightRule,
  ceiling_fan_classic: fanRule,
  car_classic: (c) => (/charg/.test(c.s) || /charg/.test(String(c.a.charging_state || c.a.charging || '').toLowerCase()) ? 'charging' : 'parked'),
  home_battery: numeric((n, c) => (c.a.device_class === 'battery' || /%/.test(c.a.unit_of_measurement || '') ? (n <= 15 ? 'low' : 'idle') : n > 0 ? 'charging' : n < 0 ? 'discharging' : 'idle')),
};

const pick = (labels, cand) => String(cand).split(' ').find((l) => labels.includes(l));
function norm(v) {
  let s = String(v == null ? '' : v).trim().toLowerCase();
  if (/^[a-z_]+(\.[a-z_]+){2,}$/.test(s)) s = s.split('.').pop();   // Home Connect style enums
  return s.replace(/[\s-]+/g, '_');
}
const WORD_INDEX = {};
for (const [kind, groups] of Object.entries(KIND_WORDS)) {
  WORD_INDEX[kind] = {};
  for (const [label, words] of Object.entries(groups)) for (const w of words.split(' ')) WORD_INDEX[kind][w] = label;
}

function mapState(kind, stateObj, config) {
  const icon = ICONS[kind];
  const labels = icon.s.map((x) => x[0]);
  const first = labels[0];
  if (!stateObj) return first;
  const raw = String(stateObj.state);
  const manual = config && config.states;
  if (manual && manual[raw] != null && labels.includes(String(manual[raw]))) return String(manual[raw]);
  const s = norm(raw);
  if (s === 'unavailable' || s === 'unknown') return first;
  const domain = String(stateObj.entity_id || '').split('.')[0];
  const ctx = { kind, labels, first, s, raw, domain, a: stateObj.attributes || {}, num: raw.trim() === '' ? NaN : Number(raw), on: !OFF_WORDS.has(s) };
  const ok = (l) => (l && labels.includes(l) ? l : undefined);
  let r;
  if (KIND_RULES[kind] && (r = ok(KIND_RULES[kind](ctx)))) return r;
  if (WORD_INDEX[kind] && (r = ok(WORD_INDEX[kind][s]))) return r;
  if ((r = ok(s))) return r;
  const dw = DOMAIN_WORDS[domain] && DOMAIN_WORDS[domain][s];
  if (dw && (r = pick(labels, dw))) return r;
  if (Number.isFinite(ctx.num) && domain === 'sensor') return ctx.num > 0 ? pick(labels, 'active producing flowing running on') || labels[1] || first : first;
  if (ON_WORDS.has(s)) return ok('on') || labels[1] || first;
  return first;
}

/* =====================================================================================
   3. ARTWORK ACCESS
   The card asks `Art.get(kind)` for the drawing ({b: svg body, k: css}); null means "show the
   placeholder".
   ===================================================================================== */
const Art = {
  get: (kind) => (ICONS[kind] ? { b: ICONS[kind].b, k: ICONS[kind].k } : null),
  use() {}, on() {}, off() {},
  status: () => ({ state: 'sampler' }),
};

/* =====================================================================================
   4. STYLES  (one shared constructable sheet per icon kind + one for the card)
   ===================================================================================== */
const CARD_CSS = `:host{display:block;height:100%}
ha-card{position:relative;overflow:hidden;height:100%;box-sizing:border-box;cursor:pointer;color:var(--primary-text-color);-webkit-tap-highlight-color:transparent;outline:none}
ha-card:focus-visible{box-shadow:0 0 0 2px var(--primary-color,#03a9f4)}
ha-card.tile{display:flex;align-items:center;gap:10px;padding:6px 12px 6px 8px;min-height:56px}
ha-card.big{display:flex;align-items:center;justify-content:center;padding:10px;min-height:120px}
.ic{flex:none;display:flex;align-items:center;justify-content:center}
.tile .ic{width:44px;height:44px}
.big .ic{width:100%;height:100%;min-height:0}
.ic svg{display:block;width:100%;height:100%}
.big .ic svg{max-width:160px;max-height:160px}
.tx{min-width:0;flex:1;display:flex;flex-direction:column;justify-content:center}
.big .tx{display:none}
.nm{font-size:14px;font-weight:var(--ha-font-weight-medium,500);line-height:20px;letter-spacing:.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.st{font-size:12px;line-height:16px;color:var(--secondary-text-color);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.na .ic{opacity:.45;filter:grayscale(1)}
.lic{position:absolute;right:6px;bottom:3px;font-size:9px;line-height:11px;letter-spacing:.3px;color:var(--secondary-text-color);opacity:.55;pointer-events:none;user-select:none}
.lic[hidden]{display:none}
.ph{color:var(--secondary-text-color);opacity:.5}
.ph.wait{opacity:.22}
.big .ic svg.ph{max-width:96px;max-height:96px;margin-bottom:12px}
.big .lic{left:0;right:0;bottom:8px;text-align:center;font-size:11px;line-height:14px;opacity:.75}
.err{padding:12px;color:var(--error-color,#db4437);font-size:13px}
/* rich layout: the icon is the hero, free on the tile; headline, details and a slim meter come from the entity */
ha-card.rich{display:flex;align-items:center;gap:12px;padding:12px 16px 12px 10px;min-height:120px;--rh-tone:var(--secondary-text-color);--rh-mute:color-mix(in srgb,var(--primary-text-color) 9%,transparent)}
.rh-ic{position:relative;flex:none;width:88px;height:88px;display:flex;align-items:center;justify-content:center}
.rich .ic{position:relative;width:88px;height:88px}
.rh-hd [hidden],.rh-tx [hidden]{display:none}
.rh-tx{flex:1;min-width:0;display:flex;flex-direction:column;justify-content:center}
.rh-hd{display:flex;align-items:center;gap:8px;height:20px}
.rich .nm{flex:1;min-width:0}
.rh-chip{flex:0 1 auto;display:inline-flex;align-items:center;gap:5px;height:20px;padding:0 8px 0 7px;border-radius:10px;box-sizing:border-box;font-size:11px;font-weight:600;line-height:20px;letter-spacing:.2px;white-space:nowrap;min-width:0;max-width:52%;--c:var(--secondary-text-color);background:color-mix(in srgb,var(--c) 14%,transparent);color:color-mix(in srgb,var(--c) 58%,var(--primary-text-color))}
.rh-chip::before{content:'';flex:none;width:6px;height:6px;border-radius:50%;background:var(--c)}
.rh-chip>span{min-width:0;overflow:hidden;text-overflow:ellipsis}
.rich .nm{flex:1 1 auto;min-width:64px}
.rh-dot{flex:none;width:12px;height:12px;border-radius:50%;box-shadow:inset 0 0 0 1px rgba(0,0,0,.14),0 0 0 2px var(--ha-card-background,var(--card-background-color,#fff)),0 0 0 3px var(--rh-mute)}
.rh-hl{display:flex;align-items:baseline;gap:6px;min-width:0;height:28px;margin-top:2px;white-space:nowrap}
.rh-v{flex:0 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;font-size:21px;line-height:28px;font-weight:600;letter-spacing:-.3px;font-variant-numeric:tabular-nums}
.rh-v.tone{color:color-mix(in srgb,var(--rh-tone) 62%,var(--primary-text-color))}
.rh-sx{flex:none;font-size:13px;line-height:28px;font-weight:500;color:var(--secondary-text-color);font-variant-numeric:tabular-nums}
.rich .st{margin-top:1px;font-variant-numeric:tabular-nums}
.rh-ft{display:flex;align-items:center;gap:10px;height:14px;margin-top:7px}
.rh-bar{position:relative;flex:1;min-width:0;height:6px;border-radius:3px;background:var(--rh-mute)}
.rh-fill{position:absolute;left:0;top:0;bottom:0;border-radius:inherit;overflow:hidden;background:var(--rh-btone,var(--rh-tone));transition:width .8s cubic-bezier(.3,.7,.3,1),background .4s}
.rh-sheen{position:absolute;top:0;bottom:0;left:0;width:45%;background:linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,.7),rgba(255,255,255,0));transform:translateX(-100%);opacity:0}
.rh-thumb{position:absolute;top:50%;width:14px;height:14px;margin:-7px 0 0 -7px;border-radius:50%;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.3),0 0 0 .5px rgba(0,0,0,.12);transition:left .8s cubic-bezier(.3,.7,.3,1)}
.rh-bar.slider{height:8px;border-radius:4px;margin:0 7px}
.rh-bar.slider .rh-fill{box-shadow:inset 0 0 0 1px rgba(0,0,0,.08)}
.rh-ftx{flex:none;min-width:34px;text-align:right;font-size:12px;line-height:14px;font-weight:500;color:var(--secondary-text-color);font-variant-numeric:tabular-nums}
.rich .ic[data-fill] .es-liquid,.rich .ic[data-fill] .dc-coffee{animation:none!important;transform:scaleY(var(--rh-fill))!important;transition:transform 1s ease-out}
.rich .ic[data-fill] .dc-tank{animation:none!important;transform:scaleY(var(--rh-fill2))!important;transition:transform 1s ease-out}
.rich .ic[data-fan=low] :is(.ac-p,.ca-p){animation-duration:4.6s!important;filter:opacity(.5)}
.rich .ic[data-fan=high] :is(.ac-p,.ca-p){animation-duration:1.6s!important}
.rich .ic[data-fan=high] :is(.ac-curtain,.ca-band){animation-duration:1.4s!important}
@keyframes rh-indet{0%{transform:translateX(-100%)}100%{transform:translateX(312%)}}
.rh-bar.indet{overflow:hidden}
.rh-bar.indet .rh-fill{width:32%!important;transition:none;animation:rh-indet 1.9s cubic-bezier(.45,0,.55,1) infinite}
.rich .ic[data-spin] .wm-clothes{animation-duration:var(--rh-spin)!important}
.rich .ic[data-vol=lo] .sp-woofer{animation-name:rh-woof-lo!important}.rich .ic[data-vol=lo] .sp-cap{animation-name:rh-cap-lo!important}
.rich .ic[data-vol=hi] .sp-woofer{animation-name:rh-woof-hi!important}.rich .ic[data-vol=hi] .sp-cap{animation-name:rh-cap-hi!important}
.rich .ic[data-vol=mute] :is(.sp-woofer,.sp-cap,.sp-glow,.sp-rim){animation:none!important}
@keyframes rh-woof-lo{0%,24%,49%,61%,100%{transform:scale(.98);animation-timing-function:cubic-bezier(.2,.9,.3,1)}6%{transform:scale(1.06)}30%{transform:scale(1.01)}55%{transform:scale(1.05)}66%{transform:scale(1.03)}}
@keyframes rh-cap-lo{0%,24%,49%,61%,100%{transform:scale(.95);animation-timing-function:cubic-bezier(.2,.9,.3,1)}6%{transform:scale(1.15)}30%{transform:scale(1.03)}55%{transform:scale(1.12)}66%{transform:scale(1.07)}}
@keyframes rh-woof-hi{0%,24%,49%,61%,100%{transform:scale(.95);animation-timing-function:cubic-bezier(.2,.9,.3,1)}6%{transform:scale(1.2)}30%{transform:scale(1.07)}55%{transform:scale(1.17)}66%{transform:scale(1.1)}}
@keyframes rh-cap-hi{0%,24%,49%,61%,100%{transform:scale(.85);animation-timing-function:cubic-bezier(.2,.9,.3,1)}6%{transform:scale(1.45)}30%{transform:scale(1.14)}55%{transform:scale(1.38)}66%{transform:scale(1.22)}}
@keyframes rh-sheen{0%{transform:translateX(-100%);opacity:0}15%,85%{opacity:1}100%{transform:translateX(222%);opacity:0}}
.rh-fill.sheen .rh-sheen{animation:rh-sheen 2s ease-in-out infinite}
@media (max-width:480px){.rh-ic,.rich .ic{width:78px;height:78px}}
@media (max-width:360px){ha-card.rich{gap:10px;padding-right:12px}.rh-ic,.rich .ic{width:70px;height:70px}.rh-v{font-size:19px}}
.rh-mc{display:flex;align-items:center;gap:4px;height:28px;margin-top:1px;cursor:default}
.rh-mc[hidden],.rh-mc [hidden]{display:none}
.rh-b{flex:none;display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;margin:0;padding:0;border:0;border-radius:50%;background:transparent;color:var(--primary-text-color);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color .2s,transform .12s}
.rh-b:first-child{margin-left:-6px}
.rh-b svg{display:block;width:20px;height:20px;fill:currentColor}
.rh-b:hover{background:var(--rh-mute)}
.rh-b:active{transform:scale(.88)}
.rh-b:focus-visible,.rh-vol input:focus-visible{outline:2px solid var(--primary-color,#03a9f4);outline-offset:1px}
.rh-b.rh-pp{background:color-mix(in srgb,var(--rh-tone) 16%,transparent);color:color-mix(in srgb,var(--rh-tone) 62%,var(--primary-text-color))}
.rh-b.rh-pp svg{width:18px;height:18px}
.rh-vol{flex:1;min-width:0;display:flex;align-items:center;gap:6px;height:28px;margin-left:8px;color:var(--secondary-text-color)}
.rh-vol svg{flex:none;width:16px;height:16px;fill:currentColor}
.rh-vol input{-webkit-appearance:none;appearance:none;flex:1;min-width:0;height:28px;margin:0;padding:0;background:transparent;cursor:pointer;--v:0%;--vt:color-mix(in srgb,var(--rh-tone) 80%,var(--primary-text-color))}
.rh-vol input::-webkit-slider-runnable-track{height:6px;border-radius:3px;background:linear-gradient(90deg,var(--vt) var(--v),var(--rh-mute) var(--v))}
.rh-vol input::-moz-range-track{height:6px;border-radius:3px;background:linear-gradient(90deg,var(--vt) var(--v),var(--rh-mute) var(--v))}
.rh-vol input::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:14px;margin-top:-4px;border:0;border-radius:50%;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.3),0 0 0 .5px rgba(0,0,0,.12)}
.rh-vol input::-moz-range-thumb{width:14px;height:14px;border:0;border-radius:50%;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.3),0 0 0 .5px rgba(0,0,0,.12)}
:host([paused]) svg,:host([paused]) svg *,:host([paused]) .rh-sheen,:host([paused]) .rh-fill{animation-play-state:paused!important}
@media (prefers-reduced-motion:reduce){.rh-bar.indet .rh-fill,.rh-sheen{animation:none!important}}
@media (prefers-reduced-motion:reduce){svg,svg *{animation-duration:1s!important;animation-delay:-.3s!important;animation-play-state:paused!important}}`;

const SHEETS = new Map();
const canAdopt = typeof CSSStyleSheet !== 'undefined' && 'replaceSync' in CSSStyleSheet.prototype && 'adoptedStyleSheets' in Document.prototype;
function cssFor(kind, k) { return kind ? k + ICONS[kind].f.map((n) => '@keyframes ' + n + KEYFRAMES[n]).join('') : CARD_CSS; }
function sheetFor(kind, k) {
  const id = kind || '';
  if (!SHEETS.has(id)) { const sh = new CSSStyleSheet(); sh.replaceSync(cssFor(kind, k)); SHEETS.set(id, sh); }
  return SHEETS.get(id);
}
function applyStyles(root, kind, k) {   // kind = null: card styles only (placeholder)
  if (canAdopt) { root.adoptedStyleSheets = kind ? [sheetFor(null), sheetFor(kind, k)] : [sheetFor(null)]; return; }
  let st = root.querySelector('style[data-a]');
  if (!st) { st = document.createElement('style'); st.dataset.a = ''; root.prepend(st); }
  st.textContent = CARD_CSS + (kind ? cssFor(kind, k) : '');
}
// quiet stand-in while an icon is locked or still being unlocked: a soft rounded tile with a small padlock
const PLACEHOLDER = '<rect x="22" y="22" width="84" height="84" rx="22" fill="none" stroke="currentColor" stroke-width="4"/>' +
  '<rect x="50" y="62" width="28" height="22" rx="5" fill="currentColor"/><path d="M55 62v-7a9 9 0 0 1 18 0v7" fill="none" stroke="currentColor" stroke-width="4"/>';
const iconName = (kind) => (ICONS[kind] ? ICONS[kind].n : FULL_PACK[kind] || kind);

/* =====================================================================================
   4b. RICH LAYOUT  (layout: rich)
   The icon is the hero and stands free on the tile; the text shows the details that matter for that kind of device,
   read from the entity's own attributes or from optional helper entities in the card config:
     progress_entity, remaining_entity, phase_entity, power_entity, battery_entity, energy_entity,
     temperature_entity, cups_entity, area_entity   (and max_power in kW for solar)
   Nothing is ever invented: a value that cannot be read is simply not shown. Where the slim meter
   has no real number behind it, it only moves in step with the icon's own animation (the coffee
   meter fills with the cup), and as soon as a real number exists the meter and the cup show it.
   Where possible the data drives the animation itself: brew progress = cup level, fan speed = AC
   mist, program phase and spin speed = washer drum, volume = how hard the woofer pumps.
   To extend: add a kind to RICH_FAMILY and, if needed, a function to RICH.
   ===================================================================================== */
const RICH_FAMILY = {
  espresso_machine: 'coffee', espresso_classic: 'coffee', drip_coffee_maker: 'coffee',
  washing_machine: 'laundry', dryer: 'laundry', dishwasher: 'laundry', washer_dryer: 'laundry',
  ev_charger: 'energy', home_battery: 'energy', solar_panel: 'energy', energy_monitor: 'energy', energy_meter: 'energy', ups: 'energy', generator: 'energy',
  robot_vacuum: 'robot', lawn_mower: 'robot', pool_robot: 'robot',
  door_lock: 'security', alarm_panel: 'security', front_door: 'security', garage_door: 'security', gate: 'security', door_sensor: 'security', window_sensor: 'security',
  weather: 'weather',
};
const RICH_DOMAIN = { climate: 'climate', media_player: 'media', light: 'light', vacuum: 'robot', lawn_mower: 'robot', lock: 'security',
  alarm_control_panel: 'security', weather: 'weather' };
const RICH_ENTITIES = ['progress_entity', 'remaining_entity', 'phase_entity', 'power_entity', 'battery_entity', 'energy_entity',
  'temperature_entity', 'cups_entity', 'area_entity', 'brew_time_entity'];
const TONE = { blue: '#2f9bff', amber: '#ffb13b', green: '#22c55e', red: '#ff4d4f', violet: '#8b5cf6', grey: 'var(--secondary-text-color)' };
// the moving part of an icon that a meter follows, and how its keyframes map to 0..100 %
const RICH_SYNC = {
  espresso_machine: { part: '.es-liquid', fill: [0.12, 1] }, drip_coffee_maker: { part: '.dc-coffee', fill: [0.2, 1], tank: [1, 0.4] },
  ev_charger: { sheen: '.ev-flow' }, home_battery: { sheen: '.hb-sweep' }, solar_panel: { sheen: '.sp-flow' },
};
const ACTIVE_LAUNDRY = ['washing', 'rinsing', 'spinning', 'tumbling', 'cooling', 'drying'];
const COFFEE = 'linear-gradient(90deg,#8a4f26,#c4874a 65%,#e9b67a)';

function richFamily(kind, domain) {
  if (RICH_FAMILY[kind]) return RICH_FAMILY[kind];
  if (RICH_DOMAIN[domain]) return RICH_DOMAIN[domain];
  if (ICONS[kind] && ICONS[kind].c === 'lighting' && (domain === 'light' || domain === 'switch')) return 'light';
  if (ICONS[kind] && ICONS[kind].c === 'climate' && domain === 'climate') return 'climate';
  return 'generic';
}
const isNum = (v) => v !== null && v !== '' && v !== undefined && typeof v !== 'boolean' && Number.isFinite(Number(v));
const firstOf = (a, names) => { for (const n of names) if (a[n] != null && a[n] !== '' && a[n] !== 'unknown' && a[n] !== 'unavailable') return a[n]; return undefined; };
const nice = (v) => { const s = String(v == null ? '' : v).trim(); const t = /^[A-Za-z_]+(\.[A-Za-z_]+){2,}$/.test(s) ? s.split('.').pop() : s;
  return t.replace(/_/g, ' ').replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase().replace(/^./, (c) => c.toUpperCase()); };
const pad2 = (n) => String(n).padStart(2, '0');
function clock(sec) {   // 0:24, 12:05, 1:02:09
  sec = Math.max(0, Math.floor(sec));
  const h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
  return h ? h + ':' + pad2(m) + ':' + pad2(s) : m + ':' + pad2(s);
}
function leftText(sec) {
  const m = Math.max(0, Math.ceil(sec / 60));
  if (m < 1) return 'under a minute left';
  return m >= 60 ? Math.floor(m / 60) + ' h ' + (m % 60 ? (m % 60) + ' min ' : '') + 'left' : m + ' min left';
}
function agoText(sec) {
  if (!Number.isFinite(sec)) return '';
  if (sec < 45) return 'just now';
  if (sec < 3600) return Math.max(1, Math.round(sec / 60)) + ' min ago';
  if (sec < 86400) return Math.round(sec / 3600) + ' h ago';
  const d = Math.round(sec / 86400);
  return d === 1 ? 'yesterday' : d + ' days ago';
}
function durationSec(v, unit) {   // 42 (min), "1:05:00", "0:42", "PT42M" -> seconds
  if (v == null || v === '') return undefined;
  if (isNum(v)) { const n = Number(v), u = String(unit || 'min').toLowerCase(); return u.startsWith('h') ? n * 3600 : u === 's' || u.startsWith('sec') ? n : u === 'ms' ? n / 1000 : u === 'd' ? n * 86400 : n * 60; }
  const s = String(v).trim();
  let m = s.match(/^(\d+):(\d{1,2})(?::(\d{1,2}))?$/);
  if (m) return m[3] != null ? +m[1] * 3600 + +m[2] * 60 + +m[3] : +m[1] * 3600 + +m[2] * 60;
  m = s.match(/^P(?:(\d+)D)?T?(?:(\d+)H)?(?:(\d+)M)?(?:(\d+(?:\.\d+)?)S)?$/i);
  if (m && s.length > 1) return (+m[1] || 0) * 86400 + (+m[2] || 0) * 3600 + (+m[3] || 0) * 60 + (+m[4] || 0);
  return undefined;
}
const timeOf = (v) => { if (v == null || isNum(v)) return undefined; const s = String(v); if (!/\d{4}-\d{2}-\d{2}|T\d{2}:/.test(s)) return undefined; const t = Date.parse(s); return Number.isFinite(t) ? t : undefined; };
// Kelvin to an approximate sRGB colour, for the colour dot of white lights
function kelvinRgb(k) {
  const t = Math.min(40000, Math.max(1000, k)) / 100;
  const r = t <= 66 ? 255 : 329.7 * Math.pow(t - 60, -0.1332);
  const g = t <= 66 ? 99.47 * Math.log(t) - 161.12 : 288.12 * Math.pow(t - 60, -0.0755);
  const b = t >= 66 ? 255 : t <= 19 ? 0 : 138.52 * Math.log(t - 10) - 305.04;
  const c = (x) => Math.round(Math.min(255, Math.max(0, x)));
  return 'rgb(' + c(r) + ',' + c(g) + ',' + c(b) + ')';
}

/* one context per render: the entity, its helpers and formatting that follows the HA user's settings */
function richCtx(card, st, kind, label) {
  const h = card._hass, cfg = card._config, a = (st && st.attributes) || {}, now = Date.now();
  const loc = h.locale || {}, lang = loc.language || h.language || undefined;
  const h12 = loc.time_format === '12' ? true : loc.time_format === '24' ? false : undefined;
  const aux = (key) => { const id = cfg[key]; const e = id && h.states[id]; return e && e.state !== 'unavailable' && e.state !== 'unknown' ? e : undefined; };
  const fmtState = (e) => { try { return h.formatEntityState ? h.formatEntityState(e) : nice(e.state); } catch (x) { return nice(e.state); } };
  const num = (n, d = 1) => { try { return Number(n).toLocaleString(lang, { maximumFractionDigits: d }); } catch (x) { return String(Math.round(n * 10 ** d) / 10 ** d); } };
  const hhmm = (t) => { try { return new Date(t).toLocaleTimeString(lang, { hour: 'numeric', minute: '2-digit', hour12: h12 }); } catch (x) { const d = new Date(t); return d.getHours() + ':' + pad2(d.getMinutes()); } };
  const since = (e) => { const t = Date.parse((e || st || {}).last_changed); return Number.isFinite(t) ? Math.max(0, (now - t) / 1000) : NaN; };
  const domain = st ? st.entity_id.split('.')[0] : String(cfg.entity).split('.')[0];
  return { card, h, cfg, st, a, kind, label, now, aux, fmtState, num, hhmm, since, domain, on: !!st && !OFF_WORDS.has(norm(st.state)) };
}
// a percentage from a helper entity, an attribute, or the entity itself when it is a % sensor
function readPct(c, key, attrs, selfOk) {
  const e = c.aux(key);
  let v;
  if (e && isNum(e.state)) v = Number(e.state);
  else if (isNum(firstOf(c.a, attrs))) v = Number(firstOf(c.a, attrs));
  else if (selfOk && c.st && isNum(c.st.state) && (/%/.test(c.a.unit_of_measurement || '') || c.a.device_class === 'battery')) v = Number(c.st.state);
  if (v == null) return undefined;
  if (v > 0 && v <= 1 && !(e ? /%/.test(e.attributes.unit_of_measurement || '') : true)) v *= 100;
  return Math.min(100, Math.max(0, v));
}
const readProgress = (c) => readPct(c, 'progress_entity', ['progress', 'progress_percent', 'percent_complete', 'program_progress', 'cycle_progress', 'brew_progress', 'job_progress']);
const readBattery = (c, self) => readPct(c, 'battery_entity', ['battery_level', 'battery', 'soc', 'state_of_charge', 'charge_level', 'battery_percent'], self);
function readRemaining(c) {   // { sec, end } from a timestamp (finish time) or a duration
  const e = c.aux('remaining_entity');
  const tries = e ? [[e.state, e.attributes.unit_of_measurement]] : [];
  for (const n of ['finish_time', 'end_time', 'completion_time', 'program_finish_time', 'estimated_end', 'finish_at']) if (c.a[n] != null) tries.push([c.a[n]]);
  for (const n of ['remaining_time', 'time_remaining', 'remain_time', 'remaining', 'remaining_program_time', 'remaining_minutes']) if (c.a[n] != null) tries.push([c.a[n], n === 'remaining_minutes' ? 'min' : c.a.remaining_time_unit]);
  for (const [v, u] of tries) {
    const t = timeOf(v);
    if (t) return { sec: Math.max(0, (t - c.now) / 1000), end: t };
    const s = durationSec(v, u);
    if (s != null && Number.isFinite(s)) return { sec: s, end: Math.round((c.now + s * 1000) / 60000) * 60000 };
  }
  return undefined;
}
function readPower(c) {   // watts, signed as the integration reports it
  const conv = (v, u) => { const n = Number(v), x = String(u || 'W'); return /^mw$/i.test(x) && x[0] === 'M' ? n * 1e6 : /^kw$/i.test(x) ? n * 1000 : n; };
  const e = c.aux('power_entity');
  if (e && isNum(e.state)) return conv(e.state, e.attributes.unit_of_measurement);
  if (c.st && isNum(c.st.state) && (c.a.device_class === 'power' || /^[kM]?W$/.test(c.a.unit_of_measurement || ''))) return conv(c.st.state, c.a.unit_of_measurement);
  const v = firstOf(c.a, ['power', 'current_power', 'charging_power', 'active_power', 'power_w', 'current_power_w']);
  return isNum(v) ? Number(v) : undefined;
}
const powerText = (c, w) => (Math.abs(w) >= 1000 ? c.num(Math.abs(w) / 1000, Math.abs(w) >= 10000 ? 1 : 2) + ' kW' : c.num(Math.abs(w), 0) + ' W');
function auxText(c, key, d = 1) {   // "18.6 kWh" from a helper entity
  const e = c.aux(key);
  if (!e) return '';
  return isNum(e.state) ? c.num(Number(e.state), d) + (e.attributes.unit_of_measurement ? ' ' + e.attributes.unit_of_measurement : '') : c.fmtState(e);
}
const joinDot = (...p) => p.filter((x) => x != null && x !== '').join(' · ');

/* each family returns a model: { v, sx, sub, chip:[text, tone], tone, vtone, fill, bar, fan, spin, vol, dot, tick }
   bar: { pct, txt, tone | color, sync (follow the icon), indet (working, amount unknown), sheen, rev, slider } */
const RICH = {
  coffee(c) {
    const p = readProgress(c), brewing = c.label === 'brewing', ready = c.label === 'ready';
    const cupsE = c.aux('cups_entity'), cupsV = cupsE ? cupsE.state : firstOf(c.a, ['cups_today', 'today_cups', 'daily_cups', 'cups']);
    const cups = isNum(cupsV) ? Number(cupsV) : undefined;
    const drink = firstOf(c.a, ['drink', 'beverage', 'recipe', 'selected_drink', 'program']);
    const cupText = cups != null ? c.num(cups, 0) + (cups === 1 ? ' cup today' : ' cups today') : '';
    if (brewing) {
      return { v: 'Brewing', sx: Number.isFinite(c.since()) ? '· ' + clock(c.since()) : '', tick: true, tone: 'amber',
        sub: joinDot(drink ? nice(drink) : '', cupText), chip: null,
        bar: p != null ? { pct: p, color: COFFEE, txt: Math.round(p) + '%' } : RICH_SYNC[c.kind] && RICH_SYNC[c.kind].part ? { pct: 0, color: COFFEE, sync: true } : null,
        fill: p != null ? p : undefined };
    }
    if (ready) return { v: 'Ready', tone: 'green', sub: joinDot(drink ? nice(drink) : '', cupText) };
    return { v: c.st ? c.fmtState(c.st) : 'Off', tone: 'grey', sub: cupText };
  },

  laundry(c) {
    const l = c.label, p = readProgress(c), rem = readRemaining(c), phE = c.aux('phase_entity');
    const prog = firstOf(c.a, ['program', 'selected_program', 'program_name', 'active_program', 'cycle', 'wash_program', 'course']);
    const phAttr = firstOf(c.a, ['program_phase', 'phase', 'cycle_phase', 'current_course', 'run_state', 'job_state', 'operation_state', 'process_state']);
    const phase = phE ? c.fmtState(phE) : phAttr && !isNum(phAttr) ? nice(phAttr) : c.st ? c.fmtState(c.st) : nice(l);
    const tone = l === 'tumbling' ? 'amber' : 'blue';
    const chip = prog && !isNum(prog) ? [nice(prog), tone] : null;
    if (ACTIVE_LAUNDRY.includes(l)) {
      return { v: phase, sx: rem ? '· ' + leftText(rem.sec).replace(' left', '').trim() : '', tick: !!rem, tone, chip,
        sub: rem ? 'Done at ' + c.hhmm(rem.end) : p != null ? Math.round(p) + '% done' : '',
        bar: p != null ? { pct: p, tone, txt: Math.round(p) + '%' } : { pct: 0, tone, indet: true }, spin: l === 'spinning' ? rpmSec(c) : undefined };
    }
    if (l === 'paused') return { v: 'Paused', tone: 'amber', chip, sub: rem ? leftText(rem.sec) : '', bar: p != null ? { pct: p, tone: 'amber', txt: Math.round(p) + '%' } : null };
    if (l === 'done') {
      const t = Date.parse(c.st && c.st.last_changed);
      return { v: 'Done', tone: 'green', chip, tick: true,
        sub: Number.isFinite(t) ? joinDot('Finished ' + c.hhmm(t), agoText(c.since())) : '' };
    }
    return { v: c.st ? c.fmtState(c.st) : 'Off', tone: 'grey', chip: null, sub: rem && rem.sec > 0 ? 'Starts, ' + leftText(rem.sec) : '' };
  },

  climate(c) {
    const a = c.a, tE = c.aux('temperature_entity');
    const cur = tE && isNum(tE.state) ? Number(tE.state) : isNum(a.current_temperature) ? Number(a.current_temperature) : undefined;
    const deg = (n) => c.num(n, 1) + '°';
    const tgt = isNum(a.temperature) ? deg(Number(a.temperature)) : isNum(a.target_temp_low) && isNum(a.target_temp_high) ? deg(Number(a.target_temp_low)) + ' / ' + deg(Number(a.target_temp_high)) : '';
    const mode = norm(c.st && c.st.state);
    const tone = { cool: 'blue', dry: 'blue', heat: 'amber', heat_cool: 'green', auto: 'green', fan_only: 'grey' }[mode] || 'grey';
    let modeText = '';
    try { modeText = c.st ? c.fmtState(c.st) : ''; } catch (x) { modeText = nice(mode); }
    const fanRaw = norm(a.fan_mode);
    const fan = !fanRaw ? null : /^(low|quiet|silent|min|sleep|night|eco|1|2|level_?1|level_?2|speed_?1)$/.test(fanRaw) ? 'low'
      : /^(high|turbo|strong|max|boost|powerful|full|5|6|7|level_?5|speed_?5)$/.test(fanRaw) ? 'high' : 'med';
    if (!c.on) return { v: cur != null ? deg(cur) : 'Off', sx: cur != null ? 'Indoor' : '', tone: 'grey', chip: ['Off', 'grey'], sub: tgt ? 'Set to ' + tgt : '' };
    let action = '';
    if (a.hvac_action) { try { action = c.h.formatEntityAttributeValue ? c.h.formatEntityAttributeValue(c.st, 'hvac_action') : nice(a.hvac_action); } catch (x) { action = nice(a.hvac_action); } }
    const hum = isNum(a.current_humidity) ? c.num(Number(a.current_humidity), 0) + '% humidity' : '';
    return { v: cur != null ? deg(cur) : tgt || modeText, sx: cur != null && tgt ? '→ ' + tgt : '', tone, chip: [modeText, tone],
      sub: joinDot(action, a.fan_mode ? 'Fan ' + nice(a.fan_mode).toLowerCase() : '', hum), fan: c.kind === 'ac_split' || c.kind === 'cassette_ac' || c.kind === 'window_ac' ? fan : null };
  },

  energy(c) {
    const l = c.label, w = readPower(c), self = !(w != null && c.st && isNum(c.st.state) && (c.a.device_class === 'power' || /W$/.test(c.a.unit_of_measurement || '')));
    let pct = readBattery(c, self);
    const maxKw = Number(c.cfg.max_power);
    if (pct == null && c.kind === 'solar_panel' && w != null && maxKw > 0) pct = Math.min(100, Math.abs(w) / (maxKw * 10));
    const word = { charging: 'Charging', discharging: 'Discharging', producing: 'Producing', low: 'Low', done: 'Charged', on_battery: 'On battery',
      online: 'Online', running: 'Running', exercising: 'Self test', active: 'Active' }[l];
    const tone = { charging: 'green', producing: 'green', done: 'green', online: 'green', active: 'green', running: 'green', discharging: 'amber', on_battery: 'amber', exercising: 'amber', low: 'red' }[l] || 'grey';
    const active = ['charging', 'discharging', 'producing', 'active', 'running', 'on_battery'].includes(l);
    const en = auxText(c, 'energy_entity');
    const sub = en ? (c.kind === 'solar_panel' ? 'Today ' + en : c.kind === 'ev_charger' ? 'Session ' + en : en) : '';
    const v = w != null ? powerText(c, w) : pct != null ? c.num(pct, 0) + '%' : c.st ? c.fmtState(c.st) : '';
    const btone = pct != null && pct <= 15 ? 'red' : pct != null && pct <= 30 && c.kind !== 'solar_panel' ? 'amber' : 'green';
    return { v, sx: '', tone, chip: word ? [word, tone] : null, sub,
      bar: pct != null ? { pct, tone: btone, txt: c.num(pct, 0) + '%', sheen: active && l !== 'low', rev: l === 'discharging' || l === 'on_battery' } : null };
  },

  media(c) {
    const a = c.a, s = norm(c.st && c.st.state), playing = s === 'playing' || s === 'buffering';
    if (!c.on || s === 'standby') return { v: c.st ? c.fmtState(c.st) : 'Off', tone: 'grey', sub: a.source ? nice(a.source) : '' };
    const title = a.media_title || a.media_channel || a.app_name || a.source || '';
    const artist = a.media_artist || a.media_album_artist || a.media_series_title || (a.media_title ? a.app_name || a.source : '') || '';
    const dur = Number(a.media_duration);
    let pos = Number(a.media_position);
    if (Number.isFinite(pos) && playing && a.media_position_updated_at) {
      const t = Date.parse(a.media_position_updated_at);
      if (Number.isFinite(t)) pos += (c.now - t) / 1000;
    }
    const hasBar = Number.isFinite(dur) && dur > 0 && Number.isFinite(pos);
    if (hasBar) pos = Math.min(dur, Math.max(0, pos));
    // transport and volume, offered only for what the player says it supports (supported_features bits)
    const f = Number(a.supported_features) || 0;
    const mc = c.domain === 'media_player' && c.cfg.media_controls !== false
      ? { prev: !!(f & 16), next: !!(f & 32), pp: !!(f & (1 | 16384)), vol: f & 4 && isNum(a.volume_level) ? Math.round(Number(a.volume_level) * 100) : null, playing } : null;
    return { mc: mc && (mc.prev || mc.next || mc.pp || mc.vol != null) ? mc : null, v: title || c.fmtState(c.st), tone: playing ? 'violet' : 'grey', chip: [playing ? 'Playing' : c.fmtState(c.st), playing ? 'violet' : 'grey'],
      sub: title ? artist : '', tick: playing && hasBar, vol: c.kind === 'speaker' && playing ? volTier(a) : undefined, bar: hasBar ? { pct: (pos / dur) * 100, tone: playing ? 'violet' : 'grey', txt: clock(pos) } : null };
  },

  robot(c) {
    const l = c.label, a = c.a, b = readBattery(c, false);
    const areaE = c.aux('area_entity');
    const areaV = areaE ? areaE.state : firstOf(a, ['cleaned_area', 'clean_area', 'cleaning_area', 'area_cleaned', 'mowed_area']);
    const areaU = areaE ? areaE.attributes.unit_of_measurement || 'm²' : 'm²';
    const tMin = firstOf(a, ['cleaning_time', 'clean_time', 'mowing_time']);
    const tone = { cleaning: 'green', mowing: 'green', returning: 'amber', error: 'red' }[l] || 'grey';
    const status = a.status && !isNum(a.status) ? nice(a.status) : c.st ? c.fmtState(c.st) : '';
    const fan = (l === 'cleaning' || l === 'mowing') && a.fan_speed && !isNum(a.fan_speed) ? [nice(a.fan_speed), 'green'] : null;
    return { v: status, tone, chip: l === 'error' ? ['Needs help', 'red'] : fan,
      sub: joinDot(isNum(areaV) ? c.num(Number(areaV), 0) + ' ' + areaU : '', isNum(tMin) ? c.num(Number(tMin), 0) + ' min' : ''),
      bar: b != null ? { pct: b, tone: b <= 20 ? 'red' : b <= 40 ? 'amber' : 'green', txt: c.num(b, 0) + '%' } : null };
  },

  security(c) {
    const l = c.label, s = norm(c.st && c.st.state);
    const alarm = /triggered|jammed|open|unlocked|opening|closing|arming|pending/.test(l || '') || /triggered|jammed|unlocked|open/.test(s);
    const good = /^(locked|armed|closed)$/.test(l) || /^armed/.test(s);
    const tone = l === 'triggered' || l === 'jammed' ? 'red' : good ? 'green' : alarm ? (c.kind === 'alarm_panel' ? 'amber' : 'red') : 'grey';
    const by = c.a.changed_by && String(c.a.changed_by).length < 30 && !/^(unknown|none|null|undefined)$/i.test(String(c.a.changed_by).trim()) ? 'by ' + c.a.changed_by : '';
    return { v: c.st ? c.fmtState(c.st) : '', vtone: true, tone, tick: true, sub: joinDot(agoText(c.since()), by) };
  },

  weather(c) {
    const a = c.a, fc = (Array.isArray(a.forecast) && a.forecast) || c.card._fc || [];
    const today = fc[0] || {}, deg = (n) => c.num(Number(n), 0) + '°';
    const hi = isNum(today.temperature) ? deg(today.temperature) : '', lo = isNum(today.templow) ? deg(today.templow) : '';
    return { v: isNum(a.temperature) ? deg(a.temperature) : '', sx: c.st ? c.fmtState(c.st) : '', tone: 'grey',
      sub: joinDot(hi && lo ? 'H ' + hi + '  L ' + lo : hi ? 'High ' + hi : '', isNum(a.humidity) ? c.num(Number(a.humidity), 0) + '% humidity' : '') };
  },

  light(c) {
    const a = c.a;
    if (!c.on) return { v: c.st ? c.fmtState(c.st) : 'Off', tone: 'grey', bar: { pct: 0, slider: true, tone: 'grey', txt: '' } };
    const pct = isNum(a.brightness) ? Math.max(1, Math.round(Number(a.brightness) / 2.55)) : 100;
    const k = isNum(a.color_temp_kelvin) ? Number(a.color_temp_kelvin) : isNum(a.color_temp) ? 1e6 / Number(a.color_temp) : undefined;
    const rgbMode = Array.isArray(a.rgb_color) && !/color_temp/.test(a.color_mode || '');
    const dot = rgbMode ? 'rgb(' + a.rgb_color.map(Number).join(',') + ')' : k ? kelvinRgb(k) : Array.isArray(a.rgb_color) ? 'rgb(' + a.rgb_color.map(Number).join(',') + ')' : null;
    const sx = a.effect && !/^(none|off)$/i.test(a.effect) ? nice(a.effect) : !rgbMode && k ? c.num(Math.round(k / 100) * 100, 0) + ' K' : '';
    return { v: pct + '%', sx, tone: 'amber', dot, bar: { pct, slider: true, color: dot || TONE.amber, txt: '' } };
  },

  generic(c) {
    return { v: c.st ? c.fmtState(c.st) : 'Entity not found', tone: c.on ? 'blue' : 'grey', tick: true, sub: agoText(c.since()) };
  },
};

// spin speed (rpm) of a washer in its spin phase -> drum turn time; 1200 rpm keeps the drawing's own pace
function rpmSec(c) {
  const v = firstOf(c.a, ['spin_speed', 'spin_rpm', 'rpm', 'current_spin_speed']);
  const n = isNum(v) ? Number(v) : isNum(String(v || '').replace(/\D+$/, '')) ? Number(String(v).replace(/\D+$/, '')) : NaN;
  return n >= 200 && n <= 2000 ? Math.min(1.2, Math.max(0.3, 540 / n)).toFixed(2) + 's' : undefined;
}
// how hard the woofer pumps follows the player's volume; muted = still
function volTier(a) {
  if (a.is_volume_muted === true) return 'mute';
  const v = Number(a.volume_level);
  if (!Number.isFinite(v)) return undefined;
  return v <= 0.001 ? 'mute' : v < 0.25 ? 'lo' : v > 0.7 ? 'hi' : undefined;
}

function richModel(card, st, kind, label) {
  const c = richCtx(card, st, kind, label);
  const fam = richFamily(kind, c.domain);
  if (!st) return { v: 'Entity not found', tone: 'grey', fam };
  const m = (RICH[fam] || RICH.generic)(c) || {};
  m.fam = fam;
  return m;
}
const reducedMotion = () => typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
// the running CSS animation of an icon part, and its phase in ms (so a meter can move in step with it)
function partAnim(svg, sel) {
  const el = svg && svg.querySelector(sel);
  if (!el || !el.getAnimations) return null;
  const an = el.getAnimations().find((x) => x.playState !== 'idle');
  if (!an || !an.effect) return null;
  const t = an.effect.getComputedTiming(), dur = Number(t.duration);
  if (!(dur > 0)) return null;
  const phase = (((Number(t.localTime) || 0) - (Number(t.delay) || 0)) % dur + dur) % dur;
  return { an, el, dur, phase, easing: getComputedStyle(el).animationTimingFunction || 'ease' };
}

/* =====================================================================================
   4c. LIVE VALUES IN THE ICON  (every layout)
   An icon whose display shows a number marks it with <g class="mh-val" data-val="target|temp|hum|co2|power|energy|weight|time"
   data-box="x y w h" data-seg="digit-w digit-h stroke radius gap" data-align="center|right">. The card draws the real value
   there as seven segment digits in the icon's own style, and hides the .mh-sample digits that the gallery shows.
   No value: "--" (a neutral dash), never a made up number. data-keep="1": no value keeps the icon's plain display marks.
   ===================================================================================== */
const SEG7 = { 0: 'abcdef', 1: 'bc', 2: 'abged', 3: 'abgcd', 4: 'fgbc', 5: 'afgcd', 6: 'afgedc', 7: 'abc', 8: 'abcdefg', 9: 'abcdfg', '-': 'g' };
function seg7(str, w, h, t, r, gap) {
  const f = (n) => Math.round(n * 100) / 100, R = (x, y, ww, hh) => '<rect x="' + f(x) + '" y="' + f(y) + '" width="' + f(ww) + '" height="' + f(hh) + '" rx="' + r + '"/>';
  let x = 0, out = '';
  for (const ch of String(str)) {
    if (ch === '1') {   // a lone 1 sits narrow, as on real LCD clocks, so "21" does not open a gap
      const m = h / 2;
      out += R(x, t * 0.6, t, m - t * 0.7) + R(x, m + t * 0.1, t, m - t * 0.7);
      x += t + gap * 1.6;
    } else if (SEG7[ch] != null) {
      const m = h / 2, box = { a: [x + t * 0.6, 0, w - t * 1.2, t], g: [x + t * 0.6, m - t / 2, w - t * 1.2, t], d: [x + t * 0.6, h - t, w - t * 1.2, t],
        f: [x, t * 0.6, t, m - t * 0.7], b: [x + w - t, t * 0.6, t, m - t * 0.7], e: [x, m + t * 0.1, t, m - t * 0.7], c: [x + w - t, m + t * 0.1, t, m - t * 0.7] };
      for (const s of SEG7[ch]) out += R(...box[s]);
      x += w + gap;
    } else if (ch === '.') { out += R(x - gap * 0.4, h - t, t, t); x += t + gap * 0.6; }
    else if (ch === ':') { out += R(x, h * 0.3 - t / 2, t, t) + R(x, h * 0.7 - t / 2, t, t); x += t + gap; }
    else if (ch === '°') {
      const s = t * 2.4, k = t * 0.75;
      out += '<path fill-rule="evenodd" d="M' + f(x) + ' 0h' + f(s) + 'v' + f(s) + 'h-' + f(s) + 'zM' + f(x + k) + ' ' + f(k) + 'v' + f(s - 2 * k) + 'h' + f(s - 2 * k) + 'v-' + f(s - 2 * k) + 'z"/>';
      x += s + gap;
    } else x += w * 0.5;
  }
  return [out, Math.max(0, x - gap)];
}
const n1 = (v) => String(Math.round(Number(v) * 10) / 10);
function liveValue(card, st, kind, label, what) {   // the text to draw, or null when the card does not know it
  if (!st) return null;
  const a = st.attributes || {}, num = isNum(st.state) ? Number(st.state) : undefined;
  switch (what) {
    case 'target': {
      const t = isNum(a.temperature) ? a.temperature : isNum(a.target_temp_low) ? a.target_temp_low : undefined;
      return t != null ? n1(t) + '°' : null;
    }
    case 'temp': return num != null ? n1(num) + '°' : isNum(a.current_temperature) ? n1(a.current_temperature) + '°' : null;
    case 'hum': return num != null ? n1(num) : isNum(a.current_humidity) ? n1(a.current_humidity) : null;
    case 'co2': return num != null ? String(Math.round(num)) : null;
    case 'weight': return num != null ? (Math.round(num * 10) / 10).toFixed(1) : null;
    case 'energy': return num != null ? String(Math.round(num)) : null;
    case 'power': { const w = readPower(richCtx(card, st, kind, label)); return w != null ? String(Math.round(Math.abs(w))) : null; }
    case 'timer': {   // shot timer: real seconds since the machine went into brewing (or a brew time sensor), only while brewing
      if (label !== 'brewing') return null;
      const e = card._config && card._config.brew_time_entity && card._hass.states[card._config.brew_time_entity];
      let sec;
      if (e && isNum(e.state)) sec = durationSec(e.state, e.attributes.unit_of_measurement || 's');
      else { const t = Date.parse(st.last_changed); if (Number.isFinite(t)) sec = (Date.now() - t) / 1000; }
      if (!(sec >= 0)) return null;
      card._valTick = true;
      return pad2(Math.floor(sec));
    }
    case 'time': {
      const r = readRemaining(richCtx(card, st, kind, label));
      if (!r) return null;
      const sec = Math.max(0, Math.round(r.sec));
      return sec >= 3600 ? Math.floor(sec / 3600) + ':' + pad2(Math.floor((sec % 3600) / 60)) : Math.floor(sec / 60) + ':' + pad2(sec % 60);
    }
    default: return null;
  }
}
function bindValues(card, svg, st, kind, label) {
  const slots = svg ? svg.querySelectorAll('.mh-val') : [];
  if (!slots.length) return '';
  let key = '', shown = false;
  card._valTick = false;
  for (const g of slots) {
    const what = g.dataset.val, v = liveValue(card, st, kind, label, what);
    const text = v != null ? v : g.dataset.keep ? '' : what === 'time' ? '--:--' : '--';
    key += text + '|';
    if (g.dataset.text === text) { shown = shown || !!text; continue; }
    g.dataset.text = text;
    if (!text) { g.innerHTML = ''; continue; }
    shown = true;
    const [bx, by, bw, bh] = (g.dataset.box || '0 0 10 10').split(' ').map(Number);
    const [w, h, t, r, gap] = (g.dataset.seg || '5 9 1.3 .5 2').split(' ').map(Number);
    const [body, width] = seg7(text, w, h, t, r, gap);
    const s = Math.min(1, bw / (width || 1), bh / h);
    const x = g.dataset.align === 'right' ? bx + bw - width * s : bx + (bw - width * s) / 2;
    g.innerHTML = '<g transform="translate(' + (Math.round(x * 100) / 100) + ' ' + (Math.round((by + (bh - h * s) / 2) * 100) / 100) + ') scale(' + (Math.round(s * 1000) / 1000) + ')">' + body + '</g>';
  }
  for (const smp of svg.querySelectorAll('.mh-sample')) smp.style.display = shown ? 'none' : '';
  svg.classList.toggle('mh-live', shown);
  return key;
}

/* =====================================================================================
   5. THE CARD
   ===================================================================================== */
const MC_SVG = { prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zm3.5 6 8.5 6V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.2-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6.5" y="5" width="4" height="14" rx="1.2"/><rect x="13.5" y="5" width="4" height="14" rx="1.2"/></svg>',
  vol: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4zM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54z"/></svg>' };
const MEDIA_CTL = '<div class="rh-mc" hidden role="group" aria-label="Media controls">' +
  '<button type="button" class="rh-b" data-a="prev" aria-label="Previous track">' + MC_SVG.prev + '</button>' +
  '<button type="button" class="rh-b rh-pp" data-a="pp" aria-label="Play"></button>' +
  '<button type="button" class="rh-b" data-a="next" aria-label="Next track">' + MC_SVG.next + '</button>' +
  '<label class="rh-vol">' + MC_SVG.vol + '<input type="range" min="0" max="100" step="1" aria-label="Volume"></label></div>';
let SEQ = 0;
const fire = (node, type, detail) => node.dispatchEvent(new CustomEvent(type, { detail, bubbles: true, composed: true }));
const esc = (s) => String(s).replace(/[&<>"]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));

class AnimaraCard extends HTMLElement {
  static getConfigElement() { return document.createElement('animara-card-editor'); }
  static getStubConfig(hass) {
    const ids = Object.keys((hass && hass.states) || {});
    const pref = ['climate.', 'fan.', 'light.', 'lock.', 'cover.', 'vacuum.', 'media_player.', 'switch.'];
    const entity = pref.map((p) => ids.find((i) => i.startsWith(p))).find(Boolean) || ids[0] || 'light.example';
    return { entity, layout: 'tile', tap_action: { action: 'more-info' } };
  }
  static get icons() { return ICONS; }
  static get edition() { return EDITION; }
  static licenseStatus(key) { return Art.status(key); }
  static guessIcon(entityId, stateObj) { return guessIcon(entityId, stateObj); }
  static mapState(kind, stateObj, config) { return mapState(kind, stateObj, config); }

  constructor() {
    super();
    this._uid = 'an' + (++SEQ).toString(36);
    this._root = this.attachShadow({ mode: 'open' });
    this._onArt = () => this._update();
  }

  setConfig(config) {
    if (!config || !config.entity) throw new Error('Animara: please choose an entity.');
    if (config.icon && !ICONS[config.icon] && !FULL_PACK[config.icon]) throw new Error('Animara: unknown icon "' + config.icon + '".');
    if (config.layout && !['tile', 'icon', 'rich'].includes(config.layout)) throw new Error('Animara: layout must be "tile", "icon" or "rich".');
    for (const k of RICH_ENTITIES) if (config[k] != null && typeof config[k] !== 'string') throw new Error('Animara: ' + k + ' must be an entity id.');
    if (config.states && typeof config.states !== 'object') throw new Error('Animara: states must be a map of HA state to icon state.');
    this._config = { layout: 'tile', tap_action: { action: 'more-info' }, ...config };
    this._kind = null;
    this._stopAnim('_fillAn'); this._stopAnim('_sheenAn');
    this._build();
    if (this._hass) this._update();
  }

  set hass(hass) { this._hass = hass; this._update(); }
  get hass() { return this._hass; }

  getCardSize() { const l = this._config && this._config.layout; return l === 'icon' || l === 'rich' ? 3 : 1; }
  getGridOptions() {
    const l = this._config && this._config.layout;
    if (l === 'rich') return { columns: 6, rows: 2, min_columns: 6, min_rows: 2, max_rows: 3 };
    return l === 'icon'
      ? { columns: 3, rows: 2, min_columns: 2, min_rows: 2 }
      : { columns: 6, rows: 1, min_columns: 4, min_rows: 1, max_rows: 1 };
  }

  connectedCallback() {
    Art.on(this._onArt);
    if (this._hass) this._update();
    if (!this._io && 'IntersectionObserver' in window) {
      this._io = new IntersectionObserver((es) => {
        this.toggleAttribute('paused', !es[es.length - 1].isIntersecting);
        if (this._r) { this._richSync(); this._tickCtl(); }
      });
      this._io.observe(this);
    }
  }
  disconnectedCallback() {
    Art.off(this._onArt);
    if (this._io) { this._io.disconnect(); this._io = null; }
    this._stopAnim('_fillAn'); this._stopAnim('_sheenAn');
    this._tickCtl();
    if (this._config) this._wxCtl(null);
  }

  _build() {
    const big = this._config.layout === 'icon', rich = this._config.layout === 'rich';
    this._root.innerHTML = rich
      ? '<ha-card class="rich" tabindex="0" role="button"><div class="rh-ic"><div class="ic"></div></div>' +
        '<div class="rh-tx"><div class="rh-hd"><div class="nm"></div><span class="rh-chip" hidden><span></span></span><span class="rh-dot" hidden></span></div>' +
        '<div class="rh-hl"><span class="rh-v"></span><span class="rh-sx" hidden></span></div><div class="st" hidden></div>' +
        '<div class="rh-ft" hidden><div class="rh-bar"><div class="rh-fill"><span class="rh-sheen"></span></div><span class="rh-thumb" hidden></span></div><span class="rh-ftx" hidden></span></div>' +
        (this._config.media_controls === false || !String(this._config.entity).startsWith('media_player.') ? '' : MEDIA_CTL) +
        '</div><span class="lic" hidden></span></ha-card>'
      : `<ha-card class="${big ? 'big' : 'tile'}" tabindex="0" role="button"><div class="ic"></div>` +
      `<div class="tx"><div class="nm"></div><div class="st"></div></div><span class="lic" hidden></span></ha-card>`;
    const q = (c) => this._root.querySelector(c);
    this._r = rich ? { chip: q('.rh-chip'), chipT: q('.rh-chip>span'), dot: q('.rh-dot'), v: q('.rh-v'), sx: q('.rh-sx'), ft: q('.rh-ft'),
      bar: q('.rh-bar'), fill: q('.rh-fill'), sheen: q('.rh-sheen'), thumb: q('.rh-thumb'), ftx: q('.rh-ftx'),
      mc: q('.rh-mc'), prev: q('[data-a=prev]'), pp: q('[data-a=pp]'), next: q('[data-a=next]'), volw: q('.rh-vol'), vol: q('.rh-vol input') } : null;
    if (this._r && this._r.mc) {   // taps here run the player's own service and never open the tile's tap action
      const R = this._r;
      R.mc.addEventListener('click', (e) => { e.stopPropagation(); const b = e.target.closest && e.target.closest('button'); if (b) this._media(b.dataset.a); });
      R.mc.addEventListener('keydown', (e) => e.stopPropagation());
      R.vol.addEventListener('input', () => { this._volDrag = true; R.vol.style.setProperty('--v', R.vol.value + '%'); });
      R.vol.addEventListener('change', () => { this._volDrag = false; this._media('vol', Number(R.vol.value) / 100); });
    }
    this._rm = null;
    applyStyles(this._root, null);
    this._card = this._root.querySelector('ha-card');
    this._ic = this._root.querySelector('.ic');
    this._nm = this._root.querySelector('.nm');
    this._st = this._root.querySelector('.st');
    this._lic = this._root.querySelector('.lic');
    this._card.addEventListener('click', () => this._tap());
    this._card.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this._tap(); } });
  }

  _update() {
    if (!this._config || !this._hass || !this._card) return;
    try {
      const id = this._config.entity;
      const st = this._hass.states[id];
      const kind = this._config.icon || guessIcon(id, st);
      Art.use(this._config.license_key, this._hass);
      const art = Art.get(kind);   // null: locked (full pack without license), being unlocked, or not in the sampler
      if (kind !== this._kind || (art ? art.b : null) !== this._artB) {
        this._kind = kind;
        this._artB = art ? art.b : null;
        const vb = art ? ICONS[kind].v : '0 0 128 128';
        this._ic.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" class="${art ? 'mh mh-' + kind : 'ph'}" overflow="visible" aria-hidden="true" focusable="false">` +
          (art ? art.b.split('ID-').join(this._uid + '-') : PLACEHOLDER) + '</svg>';
        this._svg = this._ic.firstChild;
        applyStyles(this._root, art ? kind : null, art && art.k);
        this._lastCls = null;
        this._rgb = undefined;
        this._lvl = undefined;
      }
      const a = (st && st.attributes) || {};
      let label = ICONS[kind] ? mapState(kind, st, this._config) : undefined;
      const phE = this._config.phase_entity && this._hass.states[this._config.phase_entity];
      if (phE && ACTIVE_LAUNDRY.includes(label) && RICH_FAMILY[kind] === 'laundry') {   // a running machine shows its real phase (rinse, spin)
        const pl = mapState(kind, phE, null);
        if (ACTIVE_LAUNDRY.includes(pl)) label = pl;
      }
      this._label = label;
      if (art) {
        const cls = (ICONS[kind].s.find((x) => x[0] === label) || ICONS[kind].s[0])[1];
        if (cls !== this._lastCls) { this._svg.setAttribute('class', ('mh mh-' + kind + ' ' + cls).trim()); this._lastCls = cls; }
        bindValues(this, this._svg, st, kind, label);   // real numbers on the icon's own display
        if (!this._r) this._tickCtl();
        const rgb = st && st.state === 'on' && Array.isArray(a.rgb_color) ? `rgb(${a.rgb_color.map(Number).join(',')})` : '';
        if (rgb !== this._rgb) {
          this._rgb = rgb;
          if (rgb) { this._svg.style.setProperty('--mh-color', rgb); this._svg.style.setProperty('--mh-color-up', rgb); }
          else { this._svg.style.removeProperty('--mh-color'); this._svg.style.removeProperty('--mh-color-up'); }
        }
        // dimmers: light icons scale their glow with the real brightness (--mh-level 0..1; icons default to 1 without it)
        const lvl = st && st.state === 'on' && a.brightness != null && Number.isFinite(Number(a.brightness)) ? Math.max(0, Math.min(1, Number(a.brightness) / 255)).toFixed(3) : '';
        if (lvl !== this._lvl) {
          this._lvl = lvl;
          if (lvl) this._svg.style.setProperty('--mh-level', lvl); else this._svg.style.removeProperty('--mh-level');
        }
      }
      // quiet in-card note instead of the icon, never a popup
      const ls = art ? null : Art.status(this._config.license_key);
      const note = !ls ? '' : ls.state === 'sampler' ? 'Full pack icon' : ls.state === 'checking' || ls.unlocked ? '' : ls.label || 'License needed';
      this._svg.classList.toggle('wait', !art && !note);
      if (this._lic.textContent !== note) this._lic.textContent = note;
      this._lic.hidden = !note;
      const name = this._config.name || a.friendly_name || id;
      const text = st ? this._stateText(st) : 'Entity not found';
      this._nm.textContent = name;
      this._st.textContent = text;
      this._card.classList.toggle('na', !st || st.state === 'unavailable');
      this._card.setAttribute('aria-label', name + ', ' + text);
      this._card.title = name + ': ' + text + (note ? '\n' + iconName(kind) + ': ' + (ls.state === 'sampler' ? 'part of the full Animara pack.' : ls.msg) : '');
      if (this._r) { this._wxCtl(st); this._richRender(st, kind, label); }
    } catch (e) {
      console.warn('Animara card:', e);   // never break the dashboard
    }
  }

  _stateText(st) {
    const h = this._hass, a = st.attributes || {}, dom = st.entity_id.split('.')[0];
    const attr = (k) => { try { return h.formatEntityAttributeValue ? h.formatEntityAttributeValue(st, k) : String(a[k]); } catch (e) { return String(a[k]); } };
    let t;
    try { t = h.formatEntityState ? h.formatEntityState(st) : st.state; } catch (e) { t = st.state; }
    if (dom === 'climate' && st.state !== 'off') {
      if (a.hvac_action) t = attr('hvac_action');
      if (a.current_temperature != null) t += ' · ' + attr('current_temperature');
    } else if (dom === 'light' && st.state === 'on' && a.brightness != null) t += ' · ' + Math.round(a.brightness / 2.55) + '%';
    else if (dom === 'fan' && st.state === 'on' && a.percentage != null) t += ' · ' + a.percentage + '%';
    return t;
  }

  /* ---- rich layout ---- */
  _richRender(st, kind, label) {
    const m = richModel(this, st, kind, label);
    this._rm = m;
    const R = this._r, tone = (t) => TONE[t] || t || TONE.grey;
    const put = (el, text) => { const t = text == null ? '' : String(text); if (el.textContent !== t) el.textContent = t; el.hidden = !t; };
    this._card.style.setProperty('--rh-tone', tone(m.tone));
    put(R.v, m.v);
    R.v.classList.toggle('tone', !!m.vtone);
    put(R.sx, m.sx);
    put(this._st, m.sub);
    put(R.chipT, m.chip ? m.chip[0] : '');
    R.chip.hidden = !m.chip;
    if (m.chip) R.chip.style.setProperty('--c', tone(m.chip[1]));
    R.dot.hidden = !m.dot;
    if (m.dot) R.dot.style.background = m.dot;
    // real progress also sets how full the cup or jug is
    const sync = RICH_SYNC[kind] || {};
    if (m.fill != null && sync.fill) {
      const f = sync.fill, p = m.fill / 100;
      this._ic.dataset.fill = '';
      this._ic.style.setProperty('--rh-fill', String(f[0] + (f[1] - f[0]) * p));
      if (sync.tank) this._ic.style.setProperty('--rh-fill2', String(sync.tank[0] + (sync.tank[1] - sync.tank[0]) * p));
    } else if ('fill' in this._ic.dataset) delete this._ic.dataset.fill;
    if (m.fan) this._ic.dataset.fan = m.fan; else delete this._ic.dataset.fan;
    if (m.vol) this._ic.dataset.vol = m.vol; else delete this._ic.dataset.vol;
    if (m.spin) { this._ic.dataset.spin = ''; this._ic.style.setProperty('--rh-spin', m.spin); } else delete this._ic.dataset.spin;
    // meter
    const b = m.bar;
    R.ft.hidden = !b;
    if (b) {
      R.bar.classList.toggle('slider', !!b.slider);
      R.bar.classList.toggle('indet', !!b.indet && !reducedMotion());
      R.fill.style.width = (b.indet && reducedMotion() ? 0 : b.pct) + '%';
      R.fill.style.setProperty('--rh-btone', b.color || tone(b.tone));
      R.thumb.hidden = !b.slider;
      R.thumb.style.left = b.pct + '%';
      put(R.ftx, b.txt);
      R.ftx.hidden = !b.txt;
    }
    R.fill.classList.toggle('sheen', !!(b && b.sheen) && !sync.sheen);
    if (!(b && b.sheen && sync.sheen)) this._stopAnim('_sheenAn');
    if (!(b && b.sync)) this._stopAnim('_fillAn');
    this._richSync();
    this._tickWanted = !!m.tick;
    this._tickCtl();
    const mc = R.mc ? m.mc : null;
    if (R.mc) R.mc.hidden = !mc;
    if (mc) R.ft.hidden = true;
    if (mc) {
      R.prev.hidden = !mc.prev; R.next.hidden = !mc.next; R.pp.hidden = !mc.pp;
      const ppIs = mc.playing ? 'pause' : 'play';
      if (R.pp.dataset.is !== ppIs) { R.pp.dataset.is = ppIs; R.pp.innerHTML = MC_SVG[ppIs]; R.pp.setAttribute('aria-label', mc.playing ? 'Pause' : 'Play'); }
      R.volw.hidden = mc.vol == null;
      if (mc.vol != null && !this._volDrag && R.vol.value !== String(mc.vol)) { R.vol.value = String(mc.vol); R.vol.style.setProperty('--v', mc.vol + '%'); }
    }
    const extra = [m.v, m.sx, m.sub, m.chip && m.chip[0], b && b.txt].filter(Boolean).join(', ');
    this._card.setAttribute('aria-label', (this._nm.textContent || '') + ', ' + extra);
  }

  // keep the coffee meter and the energy sheen in step with the icon's own animation
  _richSync() {
    const m = this._rm, R = this._r;
    if (!m || !R || !this._svg) return;
    const sync = RICH_SYNC[this._kind] || {}, still = reducedMotion() || this.hasAttribute('paused');
    const follow = (slot, target, sel, frames) => {
      const src = still ? null : partAnim(this._svg, sel);
      if (!src) { this._stopAnim(slot); return; }
      let an = this[slot];
      if (!an || an._src !== src.an || an._dur !== src.dur) {
        this._stopAnim(slot);
        an = target.animate(frames(src), { duration: src.dur, iterations: Infinity });
        an._src = src.an; an._dur = src.dur;
        this[slot] = an;
      }
      if (Math.abs((an.currentTime || 0) % src.dur - src.phase) > 40) an.currentTime = src.phase;
    };
    if (m.bar && m.bar.sync && sync.part) {
      follow('_fillAn', R.fill, sync.part, (src) => {
        const f = sync.fill || [0, 1];
        const kf = src.an.effect.getKeyframes().map((k) => {
          const s = String(k.transform || '').match(/scaleY\(([-\d.]+)\)/);
          if (!s) return null;
          const pct = Math.min(100, Math.max(0, ((Number(s[1]) - f[0]) / (f[1] - f[0])) * 100));
          return { offset: k.computedOffset, easing: k.easing || src.easing, width: pct + '%' };
        });
        return kf.length > 1 && kf.every(Boolean) ? kf : [{ offset: 0, easing: src.easing, width: '0%' }, { offset: 0.8, width: '100%' }, { offset: 1, width: '100%' }];
      });
    } else this._stopAnim('_fillAn');
    if (m.bar && m.bar.sheen && sync.sheen) {
      R.sheen.style.opacity = '';
      follow('_sheenAn', R.sheen, sync.sheen, (src) => {
        const a = { transform: 'translateX(-100%)', opacity: 0 }, z = { transform: 'translateX(222%)', opacity: 0 };
        const [p, q] = m.bar.rev ? [z, a] : [a, z];
        return [{ ...p, offset: 0, easing: src.easing }, { opacity: 1, offset: 0.2 }, { opacity: 1, offset: 0.8 }, { ...q, offset: 1 }];
      });
    } else this._stopAnim('_sheenAn');
  }
  _stopAnim(slot) { if (this[slot]) { try { this[slot].cancel(); } catch (e) { /* gone */ } this[slot] = null; } }

  // timers (brew time, time left, track position, "2 min ago") tick once a second while visible
  _tickCtl() {
    const want = this._config && ((this._config.layout === 'rich' && this._tickWanted) || this._valTick) && this.isConnected && !this.hasAttribute('paused');
    if (want && !this._tick) this._tick = setInterval(() => { if (this._hass) { try { const st = this._hass.states[this._config.entity]; if (this._artB) bindValues(this, this._svg, st, this._kind, this._label); if (this._r) this._richRender(st, this._kind, this._label); else this._tickCtl(); } catch (e) { /* never break */ } } }, 1000);
    else if (!want && this._tick) { clearInterval(this._tick); this._tick = null; }
  }

  // weather: today's high and low come from HA's forecast subscription (the forecast attribute is gone in new HA)
  _wxCtl(st) {
    const id = this._config.entity, want = this._config.layout === 'rich' && this.isConnected && st && id.startsWith('weather.') && !Array.isArray(st.attributes.forecast);
    if (!want || this._wxId !== id) { if (this._wxUn) { Promise.resolve(this._wxUn).then((u) => u && u()).catch(() => {}); } this._wxUn = null; this._wxId = null; }
    const conn = this._hass && this._hass.connection;
    if (!want || this._wxUn || !conn || !conn.subscribeMessage) return;
    this._wxId = id;
    this._wxUn = conn.subscribeMessage((ev) => { this._fc = (ev && ev.forecast) || []; this._update(); }, { type: 'weather/subscribe_forecast', forecast_type: 'daily', entity_id: id })
      .catch(() => { this._fc = []; return null; });
  }

  // media controls on the rich tile: called only from a user's tap or slider change
  _media(act, v) {
    const h = this._hass, id = this._config && this._config.entity;
    if (!h || !id) return;
    const svc = { prev: 'media_previous_track', next: 'media_next_track', pp: 'media_play_pause' }[act];
    if (svc) h.callService('media_player', svc, { entity_id: id });
    else if (act === 'vol' && Number.isFinite(v)) h.callService('media_player', 'volume_set', { entity_id: id, volume_level: Math.min(1, Math.max(0, v)) });
  }

  _tap() {
    const c = this._config, h = this._hass, a = c.tap_action || { action: 'more-info' };
    switch (a.action) {
      case 'none': return;
      case 'toggle': if (h) h.callService('homeassistant', 'toggle', { entity_id: c.entity }); return;
      case 'navigate': if (a.navigation_path) { history.pushState(null, '', a.navigation_path); fire(window, 'location-changed', { replace: false }); } return;
      case 'url': if (a.url_path) window.open(a.url_path, '_blank', 'noopener'); return;
      case 'perform-action': case 'call-service': {
        const [d, s] = String(a.perform_action || a.service || '').split('.');
        if (h && d && s) h.callService(d, s, a.data || a.service_data || {}, a.target);
        return;
      }
      default: fire(this, 'hass-more-info', { entityId: a.entity || c.entity });
    }
  }
}

/* =====================================================================================
   6. VISUAL EDITOR  (HA ha-form with selectors: pick from dropdowns, nothing to type
   except an optional custom name and the license key)
   ===================================================================================== */
const ICON_OPTIONS = Object.entries(ICONS).map(([k, i]) => ({ value: k, label: (CATEGORIES[i.c] || i.c) + ' · ' + i.n }));
const LABELS = { entity: 'Entity', icon: 'Icon', layout: 'Layout', name: 'Name (optional)', tap_action: 'Tap action', license_key: 'License key',
  progress_entity: 'Progress (%)', remaining_entity: 'Time remaining or finish time', phase_entity: 'Program phase', power_entity: 'Power',
  battery_entity: 'Battery or charge level (%)', energy_entity: 'Energy (e.g. today)', temperature_entity: 'Room temperature sensor',
  cups_entity: 'Cups today', area_entity: 'Area cleaned', brew_time_entity: 'Brew time (seconds)', max_power: 'Peak power (kW, solar)', media_controls: 'Media controls (play, skip, volume)' };
const FULL_COUNT = Object.keys(ICONS).length + Object.keys(FULL_PACK).length;

class AnimaraCardEditor extends HTMLElement {
  setConfig(config) { this._config = { ...config }; this._render(); this._renderLicense(); }
  set hass(hass) { this._hass = hass; if (this._form) this._form.hass = hass; else this._render(); this._renderLicense(); }

  connectedCallback() {
    this._onArt = () => this._renderLicense();
    Art.on(this._onArt);
    this._renderLicense();
    this._ensureForm().then(() => this._render());
  }
  disconnectedCallback() { Art.off(this._onArt); }

  _changed(v) { this._config = v; fire(this, 'config-changed', { config: v }); if (this._form) this._form.schema = this._schema(); this._renderLicense(); }

  _renderLicense() {}

  async _ensureForm() {
    if (customElements.get('ha-form')) return;
    try {   // the entities card editor pulls ha-form and its selectors into the page
      const helpers = window.loadCardHelpers && (await window.loadCardHelpers());
      const card = helpers && (await helpers.createCardElement({ type: 'entities', entities: [] }));
      if (card && card.constructor.getConfigElement) await card.constructor.getConfigElement();
    } catch (e) { /* fall through */ }
    await Promise.race([customElements.whenDefined('ha-form'), new Promise((r) => setTimeout(r, 4000))]);
  }

  _schema() {
    const id = this._config.entity, st = this._hass && id ? this._hass.states[id] : null;
    const auto = id ? ICONS[guessIcon(id, st)].n : '';
    const extra = this._config.icon && !ICONS[this._config.icon] && FULL_PACK[this._config.icon] ? [{ value: this._config.icon, label: FULL_PACK[this._config.icon] + ' (full pack)' }] : [];
    return [
      { name: 'entity', required: true, selector: { entity: {} } },
      { name: 'icon', selector: { select: { mode: 'dropdown', options: [{ value: 'auto', label: 'Automatic' + (auto ? ' (' + auto + ')' : '') }, ...ICON_OPTIONS, ...extra] } } },
      { type: 'grid', name: '', schema: [
        { name: 'layout', selector: { select: { mode: 'dropdown', options: [{ value: 'tile', label: 'Tile: icon, name and state' }, { value: 'rich', label: 'Rich: icon with live details' }, { value: 'icon', label: 'Big icon only' }] } } },
        { name: 'name', selector: { text: {} } },
      ] },
      ...(this._config.layout === 'rich' ? [{ type: 'expandable', name: 'rich_details', flatten: true, title: 'Live details (optional, found automatically when the entity has them)', schema: [
        ...RICH_ENTITIES.map((k) => ({ name: k, selector: { entity: k === 'remaining_entity' || k === 'phase_entity' ? { domain: 'sensor' } : { domain: ['sensor', 'input_number', 'number'] } } })),
        { name: 'max_power', selector: { number: { min: 0, max: 100, step: 0.1, mode: 'box', unit_of_measurement: 'kW' } } },
      ] }] : []),
      ...(this._config.layout === 'rich' && String(this._config.entity || '').startsWith('media_player.') ? [{ name: 'media_controls', selector: { boolean: {} } }] : []),
      { name: 'tap_action', selector: { ui_action: {} } },
      ...(EDITION === 'sampler' ? [] : [{ name: 'license_key', selector: { text: {} } }]),
    ];
  }

  _render() {
    if (!this._config || !this._hass || !customElements.get('ha-form')) return;
    if (!this._form) {
      this._form = document.createElement('ha-form');
      this._form.computeLabel = (s) => LABELS[s.name] || s.name;
      this._form.computeHelper = (s) => {
        if (s.name === 'icon') {
          const k = this._config.icon;
          if (k && ICONS[k]) return ICONS[k].d;
          const more = EDITION === 'sampler' ? ' Free sampler: ' + Object.keys(ICONS).length + ' icons. The full pack has ' + FULL_COUNT + (STORE_URL ? ': ' + STORE_URL : '.') : '';
          if (k && FULL_PACK[k]) return FULL_PACK[k] + ' is part of the full Animara pack.' + more;
          return 'Picked from the entity type, device class and name. States follow the entity automatically.' + more;
        }
        if (s.name === 'license_key') return 'From your purchase email. It activates this home once, then works offline. Free sampler icons show without it.';
        return undefined;
      };
      this._form.addEventListener('value-changed', (ev) => {
        const v = { ...this._config, ...ev.detail.value };
        if (!v.icon || v.icon === 'auto') delete v.icon;
        if (v.media_controls !== false) delete v.media_controls;
        for (const k of ['name', 'license_key', 'max_power', ...RICH_ENTITIES]) if (v[k] === '' || v[k] == null) delete v[k];
        if (v.license_key !== this._config.license_key) this._note = '';
        this._changed(v);
      });
      this.insertBefore(this._form, this._box || null);
    }
    this._form.hass = this._hass;
    this._form.data = { layout: 'tile', media_controls: true, ...this._config, icon: this._config.icon || 'auto' };
    this._form.schema = this._schema();
  }
}

const loaded = customElements.get('animara-card');
if (loaded && loaded.edition !== EDITION) console.warn('Animara: two editions are installed (' + loaded.edition + ' loaded first, ' + EDITION + ' ignored). Remove the dashboard resource you no longer use.');
if (!loaded) customElements.define('animara-card', AnimaraCard);
if (!customElements.get('animara-card-editor')) customElements.define('animara-card-editor', AnimaraCardEditor);
window.customCards = window.customCards || [];
if (!window.customCards.some((c) => c.type === 'animara-card')) {
  window.customCards.push({ type: 'animara-card', name: EDITION === 'sampler' ? 'Animara (free sampler)' : 'Animara', preview: true,
    description: EDITION === 'sampler'
      ? 'Free sampler: ' + Object.keys(ICONS).length + ' animated device icons that follow your entity state automatically. The full pack has ' + FULL_COUNT + '.'
      : 'Realistic animated device icons that follow your entity state automatically: AC, washer, lights, locks, sensors and ' + Object.keys(ICONS).length + ' more.' });
}
console.info('%c ANIMARA %c v' + VERSION + (EDITION === 'paid' ? '' : ' ' + EDITION) + ' · ' + Object.keys(ICONS).length + ' icons ', 'background:#2f6bff;color:#fff;border-radius:3px 0 0 3px;padding:1px 4px', 'background:#e8edf5;color:#14171b;border-radius:0 3px 3px 0;padding:1px 4px');
