export interface IContact {
    id: string;
    name: string,
    phone?: string;
    age?: number;
    email?: string;
    imgSrc?: string
}

export interface CardProps {
    data: IContact;
    className?: string,
    setUpdateRequest: Function;
    updateRequest: number;

}

export interface ModalAscendsProps {
    children: React.ReactNode;
    className?: string;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    titulo?: string;
}
