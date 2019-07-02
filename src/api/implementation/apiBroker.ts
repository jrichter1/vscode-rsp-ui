import { api } from './rspProviderAPI';
import { API, APIBroker, RSPProviderAPI } from 'vscode-server-connector-api';

export function apiBroker(): APIBroker {
    return {
        get(): API<RSPProviderAPI> {
            return api();
        }
    };
}