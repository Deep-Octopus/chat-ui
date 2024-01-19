import { Message } from 'element-ui';

export default class {
    static success(message) {
        Message({
            type: 'success',
            message: message+"嗷！亲",
        });
    }

    static warning(message) {
        Message({
            type: 'warning',
            message: message+"嗷！亲",
        });
    }

    static error(message) {
        Message({
            type: 'error',
            message: message+"嗷！亲",
        });
    }

    static info(message) {
        Message({
            type: 'info',
            message: message+"嗷！亲",
        });
    }
}
