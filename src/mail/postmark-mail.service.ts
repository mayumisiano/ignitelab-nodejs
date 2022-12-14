import { MailService } from './mail.service';

export class PostMarkMailService implements MailService {
  sendEmail(): string {
    return 'Postmark Mail';
  }
}
