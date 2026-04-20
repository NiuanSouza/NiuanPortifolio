import React from "react";

export interface AvatarColors {
  skinshadow4: string;
  background: string;
  computerBody: string;
  neutralDeep: string;
  surfaceMain: string;
  hairMedium: string;
  shirtMain: string;
  skinLight: string;
  hairDark: string;
  keyboardGrey: string;
  skinShadow1: string;
  skinMedium: string;
  shirtShadow1: string;
  skinPale: string;
  skinShadow2: string;
  shirtShadow2: string;
  skinHighlight: string;
  shadowSoft: string;
  shirtShadow3: string;
  computerGrey1: string;
  computerGrey2: string;
  brownDeep: string;
  skinUltraLight: string;
  skinShadow3: string;
  shirtShadow4: string;
  brownReddish: string;
  brownGrey: string;
  skinShadow4: string;
  shirtHighlight: string;
  keyboardMedium: string;
  brownDark2: string;
  brownDark3: string;
  computerSilver: string;
}

interface AvatarModelProps {
  colors: AvatarColors;
}

export const AvatarModel: React.FC<AvatarModelProps> = ({ colors }) => {
  const c = colors;

  return (
    <svg
      viewBox="0 0 1041 1024"
      width="320"
      height="315"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="crispEdges"
    >
      <path fill={c.skinshadow4} d="m2 1h1039v1023h-1039z" />
      <path
        fill={c.background}
        d="m2 1h1039v860h-56v-31h30v-15h15v-389h-14v-15h-357v15h-15v419h-15v-16h-15v-15h-16v-15h-77v16h-16v-47h-15v-60h-15v-15h-15v-15h-15v-15h-16v-31h15v-15h16v-15h15v-15h15v-31h15v-46h16v-60h16v-16h14v-62h-14v-60h15v-31h15v-15h16v-62h-16v-15h-15v-15h-31v-16h-16v-15h-61v-15h-30v-16h-106v16h-31v15h-31v15h-15v16h-15v15h-16v15h-15v16h-15v15h-32v107h16v61h16v47h15v14h15v15h17v15h14v46h16v16h-31v15h-16v61h-30v15h-16v16h-30v15h-16v30h-15v46h-15v152h16v46h14v15h16v15h-16v42h-106z"
      />
      <path
        fill={c.computerBody}
        d="m659 411h357v15h14v389h-15v15h-30v31h56v14h-41v62h-30v15h-47v15h-187v-45h47v-16h92v-30h-14v-15h-78v14h-48v17h-14v-17h-76v-14h-31v-31h-16v-15h-76v15h14v15h31v15h16v-15h15v31h-62v16h-15v-31h-16v31h-14v14h-16v-31h-15v-30h29v-14h-75v14h-30v-15h15v-15h46v-77h15v77h29v-46h-15v-61h-14v-15h15v15h15v60h15v47h16v-16h77v15h16v15h15v16h15v-419h15z"
      />
      <path
        fill={c.neutralDeep}
        d="m308 112h106v16h30v15h61v15h16v16h31v15h15v15h16v62h-16v15h-15v31h-15v60h14v62h-14v16h-16v60h-16v46h-15v31h-15v15h-15v15h-107v-15h-30v-16h-30v-15h-16v-15h-15v-16h-31v-46h-14v-15h-17v-15h-15v-14h-15v-47h-16v-61h-16v-107h32v-15h15v-16h15v-15h16v-15h15v-16h15v-15h31v-15h31z"
      />
      <path
        fill={c.surfaceMain}
        d="m522 815h76v15h16v31h31v14h76v17h14v-17h48v-14h78v15h14v30h-92v16h-47v45h187v-15h47v-15h30v-62h41v149h-917v-26h31v-16h45v-15h92v-15h77v15h199v-15h-185v-16h16v-14h15v-16h15v-14h15v14h16v-15h-16v-16h-45v16h-15v15h-46v-31h31v-15h15v-15h30v-14h75v14h-29v30h15v31h16v-14h14v-31h16v31h15v-16h62v-31h-15v15h-16v-15h-31v-15h-14z"
      />
      <path
        fill={c.computerBody}
        d="m659 411h357v15h14v389h-15v15h-30v31h56v14h-41v62h-30v15h-47v15h-187v-45h47v-16h92v-30h-14v-15h-78v14h-48v17h-14v-17h-76v-14h-31v-31h-16v-15h-76v15h14v15h31v15h16v-15h15v31h-62v16h-15v-31h-16v31h-14v14h-16v-31h-15v-30h29v-14h-75v14h-30v-15h15v-15h46v-77h15v77h29v-46h-15v-61h-14v-15h15v15h15v60h15v47h16v-16h77v15h16v15h15v16h15v-419h15zm0 15v434h124v-15h78v-15h-15v-45h-17v-31h-16v-32h16v-14h110v16h15v44h16v46h30v-15h16v-358h-16v-15z"
      />
      <path
        fill={c.hairMedium}
        d="m308 112h106v16h30v15h61v15h16v16h31v15h15v15h16v62h-16v15h-15v31h-15v60h14v62h-14v-46h-16v-16h-77v-14h16v-16h61v-46h-16v-15h-15v-15h-61v-15h-31v-16h-90v16h-15v15h-16v76h-30v31h-16v-15h-46v91h15v15h-15v-14h-15v-47h-16v-61h-16v-107h32v-15h15v-16h15v-15h16v-15h15v-16h15v-15h31v-15h31z"
      />
      <path
        fill={c.shirtMain}
        d="m185 663h46v15h16v16h14v15h15v15h32v-15h15v-16h15v16h15v151h-14v-14h-123v-31h15v-46h-15v-45h-16v121h-30v15h-16v15h-15v16h31v-16h15v-14h91v14h-14v77h-62v14h-61v-14h-30v-61h-15v-137h15v-45h15v-31h30v15h16v-15h15z"
      />
      <path
        fill={c.skinLight}
        d="m185 373h31v15h31v31h15v-31h31v46h15v16h15v14h108v-60h14v46h15v28h14v-14h31v92h-15v31h-15v15h-15v15h-107v-15h-30v-16h-30v-15h-16v-15h-15v-16h-31v-46h-14v-15h-17v-30h-15z"
      />
      <path
        fill={c.neutralDeep}
        d="m108 678h16v31h-15v45h-15v137h15v61h30v14h61v-14h62v-77h14v-14h-91v14h-15v16h-31v-16h15v-15h16v-15h30v-121h16v45h15v46h-15v31h123v14h14v-151h16v136h15v15h-15v15h-31v31h46v-15h15v-16h45v16h16v15h-16v-14h-15v14h-15v16h-15v14h-16v16h185v15h-199v-15h-77v15h-92v15h-45v16h-31v26h-16v-42h16v-15h-16v-15h-14v-46h-16v-152h15v-46h15z"
      />
      <path
        fill={c.hairDark}
        d="m277 128h31v30h-46v16h-16v15h16v15h15v-15h31v15h-16v31h16v16h-15v15h-16v76h-30v31h-16v-15h-46v91h15v15h-15v-14h-15v-47h-16v-61h-16v-107h32v-15h15v-16h15v-15h16v-15h15v-16h15v-15h31z"
      />
      <path
        fill={c.neutralDeep}
        d="m644 426h15v434h124v-15h78v-15h15v45h15v47h-108v-16h92v-30h-14v-15h-78v14h-48v17h-14v-17h-76v-14h-31v-31h-16v-15h-76v15h14v15h31v15h16v-15h15v31h-62v16h-15v-31h-16v31h-14v14h-16v-31h-15v-30h29v-14h-75v14h-30v-15h15v-15h46v-77h15v77h29v-46h-15v-61h-14v-15h15v15h15v60h15v47h16v-16h77v15h16v15h15v16h15z"
      />
      <path
        fill={c.keyboardGrey}
        d="m522 815h76v15h16v31h31v14h76v17h-31v14h-46v16h-30v15h-46v15h-185v-16h16v-14h15v-16h15v-14h15v14h16v-15h-16v-16h-45v16h-15v15h-46v-31h31v-15h15v-15h30v-14h75v14h-29v30h15v31h16v-14h14v-31h16v31h15v-16h62v-31h-15v15h-16v-15h-31v-15h-14z"
      />
      <path
        fill={c.skinLight}
        d="m308 235h90v16h31v15h61v15h15v15h16v46h-61v16h-16v14h-29v-14h-16v-16h-91v16h-15v15h-31v-31h15v-76h16v-15h15z"
      />
      <path
        fill={c.shirtMain}
        d="m185 663h46v15h16v16h14v15h15v15h32v-15h15v-16h15v16h15v151h-14v-14h-123v-31h15v-46h-15v-45h-32v-15h-14v-31h15z"
      />
      <path
        fill={c.neutralDeep}
        d="m659 411h357v15h14v389h-15v15h-30v31h56v14h-41v62h-30v15h-47v-16h47v-14h15v-47h-15v-60h-17v-46h-15v-45h-108v29h16v31h15v46h-15v-45h-17v-31h-16v-32h16v-14h110v16h15v44h16v46h30v-15h16v-358h-16v-15h-341z"
      />
      <path
        fill={c.hairDark}
        d="m521 174h31v15h15v15h16v62h-16v15h-15v31h-15v60h14v62h-14v-46h-16v-16h-77v-14h16v-16h61v-46h-16v-15h-15v-15h-61v-15h-31v-16h-90v-15h15v-16h61v16h30v15h15v15h46v-15h15v-15h15v-16h16v31h16v-46h-16z"
      />
      <path
        fill={c.neutralDeep}
        d="m247 540h15v16h15v15h-15v30h15v16h16v15h15v15h15v15h16v16h14v31h-15v-16h-15v16h-15v15h-32v-15h-15v-15h-14v-16h-16v-15h-46v15h-15v15h-16v-15h-30v-15h30v-16h16v-15h30v-61h16v-15h31z"
      />
      <path fill={c.keyboardMedium} d="m659 426h44v15h-14v419h-30z" />
      <path
        fill={c.skinShadow1}
        d="m185 373h31v15h31v31h15v-31h31v16h-17v106h16v46h16v15h15v15h-30v-15h-16v-15h-15v-16h-31v-46h-14v-15h-17v-30h-15z"
      />
      <path
        fill={c.shirtMain}
        d="m384 693h15v16h14v15h32v-31h15v15h14v61h15v46h-29v-77h-15v77h-46v15h-15v15h-15v-136h15z"
      />
      <path
        fill={c.hairDark}
        d="m277 128h31v30h-46v16h-16v15h16v15h15v-15h31v15h-16v31h16v16h-15v15h-16v76h-15v-77h-15v-15h-31v-14h-16v-16h-15v-16h15v-15h16v-15h15v-16h15v-15h31z"
      />
      <path
        fill={c.skinMedium}
        d="m460 372h61v16h16v62h-16v60h-16v-46h-31v14h-14v-28h-15v-15h15z"
      />
      <path
        fill={c.keyboardGrey}
        d="m659 875h62v17h-31v14h-46v16h-30v15h-46v15h-185v-16h168v-14h32v-16h45v-15h31z"
      />
      <path
        fill={c.neutralDeep}
        d="m353 617h91v15h-15v31h16v15h15v15h-15v31h-32v-15h-14v-16h-15v16h-15v-31h15v-46h-31z"
      />
      <path
        fill={c.skinLight}
        d="m414 831h75v14h-29v30h15v31h-15v-15h-16v-16h-45v16h-15v15h-46v-31h31v-15h15v-15h30z"
      />
      <path
        fill={c.shirtMain}
        d="m216 571h15v16h16v15h14v16h15v14h16v16h15v15h15v15h-14v15h-16v15h-15v-15h-15v-30h-15v-16h-16v-15h-15z"
      />
      <path
        fill={c.shirtShadow1}
        d="m109 891h15v31h138v30h-62v14h-61v-14h-30z"
      />
      <path
        fill={c.hairMedium}
        d="m338 174h60v15h16v15h15v16h15v15h31v15h-46v-15h-15v-15h-30v-16h-61v16h-15v15h-16v-31h16v-15h30z"
      />
      <path
        fill={c.skinMedium}
        d="m326 372h17v15h14v32h31v-15h14v-16h14v31h-14v31h-79v-16h-11v-47h14z"
      />
      <path
        fill={c.neutralDeep}
        d="m537 281h15v31h-15v60h14v62h-14v-46h-16v-16h-77v-14h16v-16h61v-46h16z"
      />
      <path
        fill={c.hairMedium}
        d="m170 220h30v16h16v14h31v15h15v16h-15v15h-16v-15h-15v15h-16v-15h-15v-15h-15z"
      />
      <path fill={c.computerGrey1} d="m783 922h108v15h16v15h-155v-15h31z" />
      <path
        fill={c.keyboardMedium}
        d="m830 724h108v14h-62v92h-15v-46h-15v-31h-16z"
      />
      <path
        fill={c.brownDark3}
        d="m338 158h61v16h30v15h15v15h16v16h15v-46h15v61h-46v-15h-15v-16h-15v-15h-16v-15h-60z"
      />
      <path fill={c.neutralDeep} d="m736 922h47v15h-31v15h171v15h-187z" />
      <path
        fill={c.background}
        d="m429 892h15v30h46v-8h15v-7h31v7h-15v8h30v14h-152v-14h15v-16h15z"
      />
      <path fill={c.shirtMain} d="m292 860h31v77h-31v-15h-15v-46h15z" />
      <path
        fill={c.skinshadow4}
        d="m399 875h45v16h16v15h-16v-14h-15v14h-31v16h-29v15h-31v-31h46v-15h15z"
      />
      <path
        fill={c.skinLight}
        d="m522 815h76v15h16v41h-16v-26h-15v15h-16v-15h-31v-15h-14z"
      />
      <path fill={c.skinPale} d="m185 373h31v15h15v15h-15v46h-31z" />
      <path fill={c.hairDark} d="m323 204h61v16h30v15h-106v-15h15z" />
      <path fill={c.skinShadow2} d="m460 372h61v16h16v16h-31v16h-31v-32h-15z" />
      <path
        fill={c.neutralDeep}
        d="m398 235h31v15h76v16h16v30h-16v-15h-15v-15h-61v-15h-31z"
      />
      <path fill={c.skinShadow1} d="m402 419h29v45h-108v-14h79z" />
      <path
        fill={c.neutralDeep}
        d="m154 342h16v31h15v76h15v15h-15v-14h-15v-47h-16z"
      />
      <path
        fill={c.background}
        d="m614 861h31v14h14v16h-31v15h-45v16h-32v-16h31v-7h16v-8h15v-7h15v-9h-30v-4h16z"
      />
      <path fill={c.neutralDeep} d="m308 112h106v16h30v15h-31v-15h-105z" />
      <path
        fill={c.shirtShadow1}
        d="m154 647h62v16h-31v15h-15v15h-16v-15h-30v-15h30z"
      />
      <path fill={c.skinShadow2} d="m343 372h59v32h-14v15h-31v-32h-14z" />
      <path
        fill={c.skinLight}
        d="m429 845h31v30h15v31h-15v-15h-16v-16h-45v-15h30z"
      />
      <path fill={c.shirtShadow1} d="m94 754h15v137h-15z" />
      <path fill={c.neutralDeep} d="m138 235h32v16h-16v91h-16z" />
      <path
        fill={c.neutralDeep}
        d="m292 235h16v16h-15v15h-16v76h-15v-77h14v-15h16z"
      />
      <path
        fill={c.neutralDeep}
        d="m200 464h31v15h16v61h-16v-46h-14v-15h-17z"
      />
      <path fill={c.keyboardMedium} d="m783 922h108v15h-108z" />
      <path
        fill={c.keyboardGrey}
        d="m628 875v9h-15v7h-15v8h-16v7h-31v-7h17v-8h14v-6h-30v7h-16v-16q11.35-0.2 22.7-0.39 5.27-0.09 10.55-0.18 29.37-0.53 58.75-0.43z"
      />
      <path
        fill={c.neutralDeep}
        d="m489 510h16v46h-15v31h-15v15h-15v-16h14v-31h15zm418 274h16v15h16v46h-16v-15h-16z"
      />
      <path fill={c.skinshadow4} d="m369 526h91v16h-91z" />
      <path fill={c.hairDark} d="m308 342h91v16h-91z" />
      <path
        fill={c.skinshadow4}
        d="m231 388h16v31h-16v31h-15v14h-16v-15h16v-46h15z"
      />
      <path fill={c.skinShadow1} d="m308 235h90v16h-90z" />
      <path fill={c.neutralDeep} d="m690 892h31v14h-16v16h-61v-16h46z" />
      <path
        fill={c.skinshadow4}
        d="m262 571h31v15h30v16c-20.37 0.13-40.64-0.25-61-1z"
      />
      <path fill={c.shirtShadow2} d="m216 571h15v16h16v30h-16v15h-15z" />
      <path fill={c.brownDark2} d="m277 128h31v30h-62v-15h31z" />
      <path fill={c.neutralDeep} d="m474 450h47v60h-16v-46h-31z" />
      <path fill={c.shirtShadow1} d="m185 754h15v91h-15z" />
      <path fill={c.shirtMain} d="m399 632h14v31h16v45h-15v-30h-15z" />
      <path fill={c.skinHighlight} d="m384 542h60v14h-14v15h-32v-15h-14z" />
      <path fill={c.shadowSoft} d="m326 372h17v15h14v17h-29v15h-16v-32h14z" />
      <path fill={c.skinShadow1} d="m277 266h16v76h-16z" />
      <path fill={c.shirtShadow3} d="m277 906h46v31h-31v-15h-15z" />
      <path fill={c.computerGrey2} d="m292 952h77v15h-77z" />
      <path fill={c.computerGrey2} d="m830 724h15v15h16v45h-15v-31h-16z" />
      <path fill={c.neutralDeep} d="m323 450h79v14h-79z" />
      <path fill={c.brownDeep} d="m475 388h31v32h-31zm-118-1h31v32h-31z" />
      <path fill={c.neutralDeep} d="m567 204h16v62h-16z" />
      <path fill={c.skinLight} d="m339 662h30v47h-16v-31h-14z" />
      <path fill={c.hairDark} d="m460 342h61v16h-61z" />
      <path fill={c.neutralDeep} d="m414 875h30v16h16v15h-16v-14h-15v14h-15z" />
      <path
        fill={c.skinShadow1}
        d="m338 875h16v16h30v15h-46zm91-30h31v16h-31v14h-30v-15h30zm0-579h61v15h-61z"
      />
      <path fill={c.neutralDeep} d="m444 143h61v15h-61z" />
      <path fill={c.skinLight} d="m522 815h29v15h16v15h-31v-15h-14z" />
      <path fill={c.skinshadow4} d="m413 478h47v17h-47z" />
      <path fill={c.keyboardMedium} d="m891 875h16v47h-16z" />
      <path
        fill={c.skinShadow1}
        d="m443 586h17v31h-31v-16h14zm62-290h16v46h-16z"
      />
      <path fill={c.skinshadow4} d="m200 388h31v15h-15v16h-16z" />
      <path fill={c.neutralDeep} d="m568 937h46v15h-46z" />
      <path fill={c.shirtShadow1} d="m124 678h30v15h-15v16h-15z" />
      <path fill={c.keyboardMedium} d="m876 830h15v45h-15z" />
      <path fill={c.hairDark} d="m308 128h45v15h-45z" />
      <path fill={c.skinshadow4} d="m598 830h16v41h-16z" />
      <path fill={c.shirtShadow1} d="m216 815h15v30h107v1h-122z" />
      <path
        fill={c.background}
        d="m552 885h30v6h-14v8h-17v7h-15v-14h16zm62-24h31v14h-47v-4h16z"
      />
      <path fill={c.skinShadow1} d="m505 861h16v31h-16z" />
      <path fill={c.neutralDeep} d="m170 693h15v16h15v15h-16v-15h-14z" />
      <path fill={c.skinShadow1} d="m339 662h30v16h-30zm-16-76h30v16h-30z" />
      <path fill={c.neutralDeep} d="m293 586h30v16h-30z" />
      <path
        fill={c.skinShadow1}
        d="m398 556h32v15h-32zm-45 46h31v15h-31zm60-107h31v15h-31zm-151-153h15v31h-15zm136-91h31v15h-31z"
      />
      <path fill={c.hairMedium} d="m552 204h15v31h-15z" />
      <path fill={c.neutralDeep} d="m521 174h31v15h-31z" />
      <path fill={c.neutralDeep} d="m246 143h31v15h-31zm31-15h31v15h-31z" />
      <path fill={c.neutralDeep} d="m614 922h30v15h-30z" />
      <path fill={c.shirtShadow1} d="m109 709h15v30h-15z" />
      <path fill={c.neutralDeep} d="m124 663h30v15h-30zm199-61h30v15h-30z" />
      <path fill={c.skinShadow1} d="m262 571h15v30h-15z" />
      <path fill={c.neutralDeep} d="m308 174h30v15h-30z" />
      <path fill={c.skinUltraLight} d="m328 404h29v15h-29z" />
      <path fill={c.skinLight} d="m429 861h31v14h-31z" />
      <path fill={c.neutralDeep} d="m402 419h14v31h-14z" />
      <path fill={c.skinShadow1} d="m415 358h29v14h-29z" />
      <path fill={c.skinshadow4} d="m460 450h14v28h-14z" />
      <path fill={c.skinShadow1} d="m444 875h16v16h-16z" />
      <path fill={c.neutralDeep} d="m154 647h16v16h-16z" />
      <path fill={c.skinShadow1} d="m277 601h16v16h-16z" />
      <path fill={c.skinshadow4} d="m353 510h16v16h-16z" />
      <path fill={c.skinShadow1} d="m489 494h16v16h-16z" />
      <path fill={c.neutralDeep} d="m521 434h16v16h-16z" />
      <path fill={c.skinUltraLight} d="m521 404h16v16h-16z" />
      <path fill={c.skinShadow1} d="m200 403h16v16h-16z" />
      <path fill={c.shadowSoft} d="m521 388h16v16h-16z" />
      <path fill={c.neutralDeep} d="m505 158h16v16h-16z" />
      <path fill={c.skinShadow1} d="m398 478h15v17h-15z" />
      <path fill={c.skinshadow4} d="m185 432h15v17h-15z" />
      <path fill={c.shadowSoft} d="m460 388h15v17h-15z" />
      <path fill={c.skinShadow3} d="m326 372h17v15h-17z" />
      <path fill={c.hairDark} d="m427 143h17v15h-17z" />
      <path fill={c.keyboardMedium} d="m891 937h16v15h-16z" />
      <path fill={c.neutralDeep} d="m891 922h16v15h-16z" />
      <path fill={c.keyboardGrey} d="m414 906h15v16h-15z" />
      <path fill={c.skinLight} d="m567 845h16v15h-16z" />
      <path fill={c.neutralDeep} d="m567 830h16v15h-16z" />
      <path fill={c.skinShadow1} d="m551 815h16v15h-16z" />
      <path fill={c.shirtShadow4} d="m292 724h16v15h-16zm31-31h15v16h-15z" />
      <path fill={c.neutralDeep} d="m154 678h16v15h-16z" />
      <path fill={c.skinShadow1} d="m323 647h16v15h-16z" />
      <path fill={c.neutralDeep} d="m444 602h16v15h-16zm-167-31h16v15h-16z" />
      <path fill={c.skinshadow4} d="m231 464h16v15h-16z" />
      <path fill={c.brownReddish} d="m490 405h16v15h-16z" />
      <path fill={c.shadowSoft} d="m506 404h15v16h-15z" />
      <path fill={c.brownReddish} d="m372 404h16v15h-16z" />
      <path fill={c.brownGrey} d="m312 404h16v15h-16zm148-32h15v16h-15z" />
      <path fill={c.neutralDeep} d="m185 204h15v16h-15zm15-15h16v15h-16z" />
      <path fill={c.hairMedium} d="m246 174h16v15h-16z" />
      <path fill={c.brownDark3} d="m460 158h15v16h-15z" />
      <path fill={c.neutralDeep} d="m231 158h15v16h-15z" />
      <path fill={c.skinShadow1} d="m460 891h15v15h-15z" />
      <path fill={c.skinLight} d="m489 845h15v15h-15zm94-15h15v15h-15z" />
      <path fill={c.skinShadow1} d="m583 815h15v15h-15z" />
      <path fill={c.shirtShadow4} d="m338 709h15v15h-15zm-30 0h15v15h-15z" />
      <path fill={c.skinShadow1} d="m308 632h15v15h-15zm-15-15h15v15h-15z" />
      <path fill={c.skinshadow4} d="m262 571h15v15h-15z" />
      <path fill={c.skinShadow1} d="m474 540h15v15h-15z" />
      <path fill={c.skinshadow4} d="m445 435h15v15h-15zm-198-16h15v15h-15z" />
      <path fill={c.skinUltraLight} d="m460 405h15v15h-15z" />
      <path fill={c.skinPale} d="m216 388h15v15h-15z" />
      <path fill={c.skinShadow1} d="m490 281h15v15h-15z" />
      <path fill={c.neutralDeep} d="m552 266h15v15h-15z" />
      <path fill={c.skinShadow1} d="m293 251h15v15h-15z" />
      <path fill={c.hairDark} d="m429 235h15v15h-15z" />
      <path fill={c.hairMedium} d="m475 220h15v15h-15z" />
      <path fill={c.neutralDeep} d="m170 220h15v15h-15z" />
      <path fill={c.neutralDeep} d="m552 189h15v15h-15z" />
      <path fill={c.neutralDeep} d="m262 174h15v15h-15z" />
      <path fill={c.neutralDeep} d="m216 174h15v15h-15z" />
      <path fill={c.skinLight} d="m505 861h16v14h-16z" />
      <path fill={c.skinShadow4} d="m521 420h16v14h-16zm-119-32h14v16h-14z" />
      <path fill={c.hairDark} d="m444 358h16v14h-16z" />
      <path fill={c.keyboardGrey} d="m429 892h15v14h-15z" />
      <path fill={c.shirtMain} d="m399 632h14v15h-14z" />
      <path fill={c.skinShadow1} d="m460 571h14v15h-14zm-15-121h15v14h-15z" />
      <path fill={c.skinPale} d="m216 450h15v14h-15z" />
      <path fill={c.skinshadow4} d="m431 404h14v15h-14z" />
      <path fill={c.shadowSoft} d="m388 404h14v15h-14z" />
      <path fill={c.neutralDeep} d="m743 814h10v17h-10z" />
      <path
        fill={c.shirtHighlight}
        d="m988 442h13v13h-13zm-22 0h13v13h-13zm-22 0h13v13h-13z"
      />
      <path fill={c.neutralDeep} d="m767 814h9v17h-9z" />
      <path fill={c.background} d="m583 876h15v8h-15z" />
      <path fill={c.neutralDeep} d="m791 815h8v15h-8zm-70 0h7v15h-7z" />
      <path fill={c.keyboardGrey} d="m628 869h17v6h-17z" />
    </svg>
  );
};
