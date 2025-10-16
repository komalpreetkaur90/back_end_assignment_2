// Always mock firebase in every test
jest.mock("../src/config/firebaseConfig", () => {
  const mockDocData = (data: any = {}) => ({
    id: "mock-id",
    data: jest.fn(() => data),
    exists: true,
  });

  const mockCollection = {
    get: jest.fn(async () => ({
      docs: [mockDocData({ name: "Mock Name", address: "Mock Address", phone: "555-0000" })],
    })),
    doc: jest.fn((id: string) => ({
      get: jest.fn(async () => mockDocData({ name: "Mock Name", address: "Mock Address", phone: "555-0000" })),
      update: jest.fn(async (data: any) => ({ id, ...data })),
      delete: jest.fn(async () => true),
    })),
    add: jest.fn(async (data: any) => ({
      id: "mock-id",
      ...data,
    })),
  };

  return {
    db: {
      collection: jest.fn(() => mockCollection),
    },
    admin: {
      initializeApp: jest.fn(),
      credential: {
        cert: jest.fn(),
      },
    },
  };
});

// Reset all mocks after each test
afterEach(() => {
    jest.clearAllMocks();
});

// Cleanup after all tests in a file
afterAll(() => {
    jest.resetModules();
});