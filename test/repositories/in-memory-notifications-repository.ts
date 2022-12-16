import { Notification } from '../../src/app/entities/notification';
import { NotificationRepository } from '../../src/app/repositories/notification-repository';

const notifications: Notification[] = [];

export class InMemoryNotificationsRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
