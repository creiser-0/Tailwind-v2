import { FC, ReactNode, createContext, useState } from "react";

interface iNotification {
    icon: string;
    text: string;
}

interface iNotificationContext {
    contextValue: iNotification;
    updateContext: (newNotificationList: iNotification) => void;
}

interface iNotificationProviderProps {
    children: ReactNode;
}
const notificationContext = createContext<Partial<iNotificationContext>>({});

const NotificationContextProvider: FC<iNotificationProviderProps> = ({
    children,
}) => {
    const [contextValue, setContextValue] = useState<iNotification>();

    const updateContext = (newContext: iNotification) =>
        setContextValue(newContext);

    return (
        <notificationContext.Provider value={{ contextValue, updateContext }}>
            {children}
        </notificationContext.Provider>
    );
};

export {
    notificationContext,
    NotificationContextProvider,
    iNotification,
    iNotificationContext,
};

export default notificationContext;
