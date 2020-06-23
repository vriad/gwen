import { GwenBaseBase } from './GwenBaseBase';
export class GwenBase extends GwenBaseBase {
  get row() {
    return this.css({
      display: 'flex',
      flexDirection: 'row',
    });
  }
  get fdr() {
    return this.css({
      display: 'flex',
      flexDirection: 'row',
    });
  }
  get fdrr() {
    return this.css({
      display: 'flex',
      flexDirection: 'row-reverse',
    });
  }
  get fdc() {
    return this.css({
      display: 'flex',
      flexDirection: 'column',
    });
  }
  get column() {
    return this.css({
      display: 'flex',
      flexDirection: 'column',
    });
  }
  get fdcr() {
    return this.css({
      display: 'flex',
      flexDirection: 'column-reverse',
    });
  }
  get fww() {
    return this.css({ flexWrap: 'wrap' });
  }
  get fwwr() {
    return this.css({ flexWrap: 'wrap-reverse' });
  }
  get fwnw() {
    return this.css({ flexWrap: 'nowrap' });
  }
  get aic() {
    return this.css({ alignItems: 'center' });
  }
  get aist() {
    return this.css({ alignItems: 'stretch' });
  }
  get aifs() {
    return this.css({ alignItems: 'flex-start' });
  }
  get aife() {
    return this.css({ alignItems: 'flex-end' });
  }
  get aib() {
    return this.css({ alignItems: 'baseline' });
  }
  get asc() {
    return this.css({ alignSelf: 'center' });
  }
  get ass() {
    return this.css({ alignSelf: 'stretch' });
  }
  get asfs() {
    return this.css({ alignSelf: 'flex-start' });
  }
  get asfe() {
    return this.css({ alignSelf: 'flex-end' });
  }
  get asb() {
    return this.css({ alignSelf: 'baseline' });
  }
  get jcc() {
    return this.css({ justifyContent: 'center' });
  }
  get jcfs() {
    return this.css({ justifyContent: 'flex-start' });
  }
  get jcfe() {
    return this.css({ justifyContent: 'flex-end' });
  }
  get jcsb() {
    return this.css({ justifyContent: 'space-between' });
  }
  get jcsa() {
    return this.css({ justifyContent: 'space-around' });
  }
  get jcse() {
    return this.css({ justifyContent: 'space-evenly' });
  }
  get jic() {
    return this.css({ justifyItems: 'center' });
  }
  get jis() {
    return this.css({ justifyItems: 'start' });
  }
  get jie() {
    return this.css({ justifyItems: 'end' });
  }
  get jist() {
    return this.css({ justifyItems: 'stretch' });
  }
  get jib() {
    return this.css({ justifyItems: 'baseline' });
  }
  get jifb() {
    return this.css({ justifyItems: 'first baseline' });
  }
  get jilb() {
    return this.css({ justifyItems: 'last baseline' });
  }
  get white() {
    return this.css({ color: '#FFFFFF' });
  }
  get black() {
    return this.css({ color: `#000000` });
  }
  get underline() {
    return this.css({ textDecoration: 'underline' });
  }
  get visible() {
    return this.css({ visibility: 'visible' });
  }
  get hidden() {
    return this.css({ visibility: 'hidden' });
  }
  get wbn() {
    return this.css({ wordBreak: 'normal' });
  }
  get wbba() {
    return this.css({ wordBreak: 'break-all' });
  }
  get wbka() {
    return this.css({ wordBreak: 'keep-all' });
  }
  get wbbw() {
    return this.css({ wordBreak: 'break-word' });
  }
  get toc() {
    return this.css({ textOverflow: 'clip' });
  }
  get toe() {
    return this.css({ textOverflow: 'ellipsis' });
  }
  get bold() {
    return this.css({ fontWeight: 'bold' });
  }
  get bolder() {
    return this.css({ fontWeight: 'bolder' });
  }
  get lighter() {
    return this.css({ fontWeight: 'lighter' });
  }
  get wide() {
    return this.css({ width: '100%' });
  }
  get tall() {
    return this.css({ height: '100%' });
  }
  get fill() {
    return this.wide.tall;
  }
  get upper() {
    return this.css({ textTransform: 'uppercase' });
  }
  get lower() {
    return this.css({ textTransform: 'lowercase' });
  }
  get caps() {
    return this.css({ textTransform: 'capitalize' });
  }
  get tal() {
    return this.css({ textAlign: 'left' });
  }
  get tac() {
    return this.css({ textAlign: 'center' });
  }
  get tar() {
    return this.css({ textAlign: 'right' });
  }
  get taj() {
    return this.css({ textAlign: 'justify' });
  }
  get fullw() {
    return this.css({ width: '100vw' });
  }
  get fullh() {
    return this.css({ height: '100vh' });
  }
  get full() {
    return this.css({ height: '100vh', width: '100vw' });
  }
  get ofh() {
    return this.css({ overflow: 'hidden' });
  }
  get ofv() {
    return this.css({ overflow: 'visible' });
  }
  get ofs() {
    return this.css({ overflow: 'scroll' });
  }
  get ofa() {
    return this.css({ overflow: 'auto' });
  }
  get smallcaps() {
    return this.css({ fontVariant: 'small-caps' });
  }
  /**
   * @property allsmallcaps
   * @description { fontVariant: "all-small-caps" }
   */
  get allsmallcaps() {
    return this.css({ fontVariant: 'all-small-caps' });
  }
  hover = (delta: (t: this) => this) => {
    const newInst: this = new (this as any).constructor();
    return this.css({ [`&:hover`]: delta(newInst).stop });
  };
  selector = (cond: string, delta: (t: this) => this) => {
    const newInst: this = new (this as any).constructor();
    return this.css({
      [cond]: delta(newInst).stop,
    });
  };
  smup = (delta: (t: this) => this) =>
    this.selector(`@media only screen and (min-width: ${this.finalTheme.sm})`, delta);
  mdup = (delta: (t: this) => this) =>
    this.selector(`@media only screen and (min-width: ${this.finalTheme.md})`, delta);
  lgup = (delta: (t: this) => this) =>
    this.selector(`@media only screen and (min-width: ${this.finalTheme.lg})`, delta);
  xlup = (delta: (t: this) => this) =>
    this.selector(`@media only screen and (min-width: ${this.finalTheme.xl})`, delta);
  xsdown = (delta: (t: this) => this) =>
    this.selector(`@media only screen and (max-width: ${this.finalTheme.sm})`, delta);
  smdown = (delta: (t: this) => this) =>
    this.selector(`@media only screen and (max-width: ${this.finalTheme.md})`, delta);
  mddown = (delta: (t: this) => this) =>
    this.selector(`@media only screen and (max-width: ${this.finalTheme.lg})`, delta);
  lgdown = (delta: (t: this) => this) =>
    this.selector(`@media only screen and (max-width: ${this.finalTheme.xl})`, delta);
  xsonly = (delta: (t: this) => this) =>
    this.selector(
      `@media only screen and (min-width: ${this.finalTheme.xs}px ) and (max-width: ${this.finalTheme.sm}px)`,
      delta,
    );
  smonly = (delta: (t: this) => this) =>
    this.selector(
      `@media only screen and (min-width: ${this.finalTheme.sm}px ) and (max-width: ${this.finalTheme.md}px)`,
      delta,
    );
  mdonly = (delta: (t: this) => this) =>
    this.selector(
      `@media only screen and (min-width: ${this.finalTheme.md}px ) and (max-width: ${this.finalTheme.lg}px)`,
      delta,
    );
  lgonly = (delta: (t: this) => this) =>
    this.selector(
      `@media only screen and (min-width: ${this.finalTheme.lg}px ) and (max-width: ${this.finalTheme.xl}px)`,
      delta,
    );
  xlonly = (delta: (t: this) => this) =>
    this.selector(`@media only screen and (min-width: ${this.finalTheme.xl}px )`, delta);
  checked = (delta: (t: this) => this) => this.selector(`&:checked`, delta);
  focus = (delta: (t: this) => this) => this.selector(`&:focus`, delta);
  focusWithin = (delta: (t: this) => this) => this.selector(`&:focus-within`, delta);
  visited = (delta: (t: this) => this) => this.selector(`&:visited`, delta);
  active = (delta: (t: this) => this) => this.selector(`&:active`, delta);
  empty = (delta: (t: this) => this) => this.selector(`&:empty`, delta);
  enabled = (delta: (t: this) => this) => this.selector(`&:enabled`, delta);
  firstOfType = (delta: (t: this) => this) => this.selector(`&:first-of-type`, delta);
  lastOfType = (delta: (t: this) => this) => this.selector(`&:last-of-type`, delta);
  firstChild = (delta: (t: this) => this) => this.selector(`&:first-child`, delta);
  lastChild = (delta: (t: this) => this) => this.selector(`&:last-child`, delta);
  nthChild = (n: number | string, delta: (t: this) => this) => this.selector(`&:nth-child(${n})`, delta);
  if = (condition: any, delta: (t: this) => this) => {
    if (condition) return delta(this);
    return this;
  };
}
