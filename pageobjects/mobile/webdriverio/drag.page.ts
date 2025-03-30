import { $ } from '@wdio/globals';


class DragScreen {
    
    get dragL1() { return $('~drag-l1'); }
    get dragC1() { return $('~drag-c1'); }
    get dragR1() { return $('~drag-r1'); }
    get dragL2() { return $('~drag-l2'); }
    get dragC2() { return $('~drag-c2'); }
    get dragR2() { return $('~drag-r2'); }
    get dragL3() { return $('~drag-l3'); }
    get dragC3() { return $('~drag-c3'); }
    get dragR3() { return $('~drag-r3'); }
    get dropL1() { return $('~drop-l1'); }
    get dropC1() { return $('~drop-c1'); }
    get dropR1() { return $('~drop-r1'); }
    get dropL2() { return $('~drop-l2'); }
    get dropC2() { return $('~drop-c2'); }
    get dropR2() { return $('~drop-r2'); }
    get dropL3() { return $('~drop-l3'); }
    get dropC3() { return $('~drop-c3'); }
    get dropR3() { return $('~drop-r3'); }
    private get renew() { return $('~renew'); }
    private get retry() { return $('~button-Retry'); }

    async waitForRetryButton() {
        return this.retry.waitForDisplayed();
    }

    async tapOnRetryButton() {
        return this.retry.click();
    }

    async tapOnRenewButton() {
        return this.renew.click();
    }

    async waitForRenewButton() {
        return this.renew.waitForDisplayed();
    }
}
export default new DragScreen();