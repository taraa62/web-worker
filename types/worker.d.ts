import {EWorkerMode, ILogger, TAny} from "./common";

export interface IWorkerData{
    mode:EWorkerMode;
    handlers:Record<string, string>;
}

export interface IHandlerDefParams{
    logger:ILogger
}

export interface IWorker{

}

