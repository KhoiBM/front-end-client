/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { MdSupervisorAccount, MdShowChart, MdImportExport } from "react-icons/md";
import { AiOutlineAppstore, AiOutlineTag, AiOutlineSync } from 'react-icons/ai'
import { RiProductHuntLine } from "react-icons/ri";
import infoSectionOne from 'src/app/assets/image/infosectionone.svg'
const useApiPath = {
    "apiEndpoint": "https://tyadtos4x2.execute-api.ap-southeast-1.amazonaws.com/dev/",
    "api": {
        "auth": {
            "signIn": "user/login",
            "signUp": "user/signup",
            "confirmCode": "user/confirm-email",
            "forgotPassword": "user/forgot-password",
            "confirmForgotPassword": "user/confirm-forgot-password"
        },
        "photoServices": {
            getPresignedURLToUpload: "manage/upload-photo",
            getPhotoListByLink: "manage/get-list-photo"
        },
        "productServices": {
            getAllService: "homepage/get-list-service",
            getAllCategory: "homepage/get-list-category",
            getCategoryByService: "homepage/get-list-category-by-service",
            getAllProduct: "homepage/get-list-product",
            getDetailProduct: "homepage/get-product-detail"
        },
        "manageProfile": {
            viewProfile: "manager/view-profile",
            editProfile: "manager/edit-profile"
        },

    }
}
const useRoleName = {
    customer: "Customer"
};

const useResultStatus = {
    SUCCESS: "SUCCESS",
    FAILURE: "FAILURE"
}

const useRegex = {
    // // regexPassword: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/,
    // // regexEmail: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/i,
    // // regexPhone: /^\d{10,11}$/
    // regexPassword: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/,
    // regexEmail: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/i,
    // regexPhone: /^\d{10,11}$/,
    // // regexPrice: /^([\d]{1,3})([.]\d{3})*$/,
    // regexPrice: /^\d{1,}$/,

    regexPassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
    // regexEmail: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    regexEmail: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/i,
    regexPhone: /^[+]?(\([0-9]{1,4}\))?[0-9]+$/,
    regexUsername: /^(?=.{1,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
    // regexUsername: /^[a-zA-Z0-9]+$/,
    regexName: /^((?!\s{2})[a-zA-Z\s])+$/,
    regexVietnameseName: /^([a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂưăạảấầẩẫậắằẳẵặẹẻẽếềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý]((?![\s]{2})[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂưăạảấầẩẫậắằẳẵặẹẻẽếềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\s])*)*$/,
    regexVietnamese: /^([a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂưăạảấầẩẫậắằẳẵặẹẻẽếềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý]((?![\s]{2})[a-zA-Z0-9_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂưăạảấầẩẫậắằẳẵặẹẻẽếềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\s])*)*$/,
    regexAddress: /^([a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂưăạảấầẩẫậắằẳẵặẹẻẽếềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý]((?![\s]{2})[a-zA-Z0-9_.,ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂưăạảấầẩẫậắằẳẵặẹẻẽếềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\s])*)*$/,
    regexHexColor: /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
    regexInteger: /^([\\-]?[0-9]+)$/,
    regexPositiveInteger: /^[0-9]+$/,
    regexNumber: /^[0-9]+\.?[0-9]*$/,
    regexCode: /^[a-zA-Z0-9]+$/,
    regexPositiveNumber: /^([0-9]+\.?[0-9]*)$/
}

const useUserRole = {
    customer:
        [
            {
                text: "",
                icon: <MdSupervisorAccount />,
                link: ""
            }
        ],
    guest:
        [
            {
                text: "",
                icon: <MdSupervisorAccount />,
                link: ""
            }
        ],

}
const useStyles = {
}

const useMessage = {
    invalidData: "Dữ liệu không hợp lệ",
    fetchApiFailure: "Có lỗi xảy ra khi gọi api",
    resultFailure: `Có lỗi xảy ra bên server`,
    uploadPhotoFailure: "Có lỗi xảy ra khi tải ảnh lên server",
    uploadFilePlease: "Vui lòng tải lên ảnh của sản phẩm",
    localStorageFailure: "Có lỗi xảy ra khi thao tác với local storage",
    createOrderFailure: "Đặt hàng thất bại"
}

const useConfigAWS = {
    STUDIOBUCKET: {
        BUCKETNAME: "photo-upload-album-1",
        FOLDER: {
            "STUDIO'SRAWPRODUCT": "Studio'sRawProduct",
            "SERVICE": "Service",
            "CATEGORY": "Category",
            "HOMEPAGECAROUSEL": "HomepageCarousel"
        }
    },
    CUSTOMERBUCKET: {
        BUCKETNAME: "photo-order-customer",
        FOLDER: {
            "CUSTOMER'SRAWPRODUCT": "Customer'sRawProduct",
            "ORDER": "Order"
        }
    },

}



const useStatusOrder = {

    "CUSTOMER": {
        "FILTER": ["Đơn chờ duyệt", "Hủy đơn", "Đơn được duyệt", "Đang làm mẫu", "Hoàn thành mẫu", "Chờ xác nhận mẫu", "Từ chối mẫu",
            "Chấp nhận mẫu", "Đang in sản phẩm", "Hoàn thành in sản phẩm", "Đang lưu trữ", "Đang giao hàng", "Hoàn thành đơn hàng"],

    }



}

const useDataInfoSection = {
    homeObjOne: {
        id: 'signup',
        lightBg: true,
        lightText: false,
        lightTextDesc: false,
        topLine: "Sử dung dịch vụ của chúng tôi ngay bây giờ",
        headLine: "Tạo tài khoản là cực dễ dàng",
        description: 'Thiết lập mọi thứ và sẵn sàng trong vòng chưa đầy 10 phút. Tất cả những gì bạn cần làm là thêm thông tin của mình và bạn đã sẵn sàng.',
        buttonLabel: 'Bắt đầu ngay',
        imgStart: false,
        img: infoSectionOne,
        alt: "signup",
        dark: false,
        primary: false,
        darkText: true,
        link: "/auth/signup"
    }




}


const usePersonalizeType = {
    "createYourOwn": "1",
    "studioRawProductDetail": "2",
    "technicalCartItem": "3"
}

const useCreateBy = {
    customer: "Khách hàng",
    manager: "Quản lý"
}

const config = { useApiPath, useRoleName, useResultStatus, useRegex, useUserRole, useStyles, useMessage, useConfigAWS, useStatusOrder, useDataInfoSection, usePersonalizeType, useCreateBy }
export default config

