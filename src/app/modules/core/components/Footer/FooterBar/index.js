import React from 'react';
import { Footer } from '../FooterComponents';
import { Icons } from '../../Utils/Icons';

export function FooterBar() {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Title>Về chúng tôi</Footer.Title>
                        <Footer.Link href="#">Giới thiệu về chúng tôi</Footer.Link>
                        <Footer.Link href="#">Câu chuyện của chúng tôi</Footer.Link>
                        <Footer.Link href="#">Khách hàng của chúng tôi</Footer.Link>
                        <Footer.Link href="#">Liên hệ chúng tôi</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Hướng dẫn</Footer.Title>
                        <Footer.Link href="#">Hướng dẫn đặt hàng</Footer.Link>
                        <Footer.Link href="#">Hướng dẫn thanh toán</Footer.Link>
                        <Footer.Link href="#">Câu hỏi thường gặp</Footer.Link>
                        <Footer.Link href="#">Trợ giúp</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Chính sách</Footer.Title>
                        <Footer.Link href="#">Chính sách vận chuyển</Footer.Link>
                        <Footer.Link href="#">Chính sách thanh toán</Footer.Link>
                        <Footer.Link href="#">Chính sách đổi trả</Footer.Link>
                        <Footer.Link href="#">Chính sách riêng tư</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Mạng xã hội</Footer.Title>
                        <Footer.Link href="#"><Icons className="fab fa-facebook-f" />Facebook</Footer.Link>
                        <Footer.Link href="#"><Icons className="fab fa-instagram" />Instagram</Footer.Link>
                        <Footer.Link href="#"><Icons className="fab fa-youtube" />Youtube</Footer.Link>
                        <Footer.Link href="#"><Icons className="fab fa-twitter" />Twitter</Footer.Link>
                    </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>

    );
}
