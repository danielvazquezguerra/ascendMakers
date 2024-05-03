export interface IContact {
    id: string;
    name: string,
    phone?: string;
    age?: number;
    email?: string;
    imgSrc?: string;
}

export interface ValidInput {
    ok: boolean,
    mensaje: string
}

export interface CardProps {
    data: IContact;
    className?: string,
    setUpdateRequest: React.Dispatch<React.SetStateAction<number>>;
    updateRequest: number;

}

export interface ProfileInicialesProps {
    name: string,
}

export interface ValidProps {
    validador: ValidInput,
    valor: string | number 
}

export interface ModalAscendsProps {
    children: React.ReactNode;
    className?: string;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    titulo?: React.ReactNode;
}

export interface FormAddContactProps {
    className?: string;
    setUpdateRequest: React.Dispatch<React.SetStateAction<number>>;
    updateRequest: number;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface FormEditContactProps {
    className?: string;
    setUpdateRequest: React.Dispatch<React.SetStateAction<number>>;
    updateRequest: number;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    contact: IContact;
}

export interface ContactWrapperProps {
    contacts: IContact[] | undefined;
    className?: string;
    setUpdateRequest: React.Dispatch<React.SetStateAction<number>>;
    updateRequest: number;
}
