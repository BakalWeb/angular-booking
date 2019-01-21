export class Booking {
  id: number;
  created: Date;
  bookingDate: Date;
  bookingTime: Date;
  bookingLength: Date;
  createdBy: string;
  status: string;

  constructor(status?: string) {
    this.status = status ? status : 'draft';
  }
}
