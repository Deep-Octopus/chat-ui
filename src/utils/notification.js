import { Notification} from "element-ui";

export default class {
    // duration：显示时间, 毫秒。设为 0 则不会自动关闭
    static success(title,message,duration=0) {
        Notification({
            title:title,
            duration:duration,
            type: 'success',
            message: message+"嗷！亲",
        });
    }

    static warning(title,message,duration=0) {
        Notification({
            title:title,
            duration:duration,
            type: 'warning',
            message: message+"嗷！亲",
        });
    }

    static error(title,message,duration=0) {
        Notification({
            title:title,
            duration:duration,
            type: 'error',
            message: message+"嗷！亲",
        });
    }

    static info(title,message,duration=0) {
        Notification({
            title:title,
            duration:duration,
            type: 'info',
            message: message+"嗷！亲",
        });
    }
}