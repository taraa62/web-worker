import {
    ECommandType,
    EMessageSender,
    EResponseType,
    IMessageRequest,
    IMessageResponse,
    TTaskKey
} from "../types/controller";
import {Random} from "./utils/Random";
import {ITaskOptions} from "../types/common";

export class MessageRequest implements IMessageRequest {

    constructor(
        public key: TTaskKey,
        public sender: EMessageSender,
        public command: ECommandType,
        public handler: string,
        public execute?: string,
        public params?: unknown
    ) {
    }
}

export class MessageResponse implements IMessageResponse {
    constructor(public key: TTaskKey,
                public type: EResponseType,
                public sender: EMessageSender,
                public data: unknown
    ) {
    }
}

export class Task {
    public readonly key: TTaskKey = Random.randomString(16); //key, for stop run current task;

    public isRun: boolean = false;
    public isEnd: boolean = false;
    public isSendResponse?: boolean;
    public timerKey?: NodeJS.Timeout;
    public resolve?: (value?: unknown) => void;
    public reject?: (error?: unknown) => void;
    public request?: IMessageRequest;
    public numReset = 0;


    constructor(options:ITaskOptions) {
    }
}

/*

потрібно добвити чекер на наявність задач які були загублені в процесі.
по виявленню такого потрібно щось робити?
 */
