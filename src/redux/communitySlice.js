import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGroups = createAsyncThunk(
  'community/fetchGroups',
  async () => {
    const response = await fetch('/community.json');
    const data = await response.json();
    return data;
  }
);

const communitySlice = createSlice({
  name: 'community',
  initialState: {
    groups: [],
    notices: [],
    status: 'idle',
    likes: [], // 받은 응원 데이터를 저장할 곳을 빈 배열로 초기화
    keyword: '',
    hot_words: [],
    error: null,
  },
  reducers: {
    addGroup: (state, action) => {
      state.groups.push(action.payload);
    },

    setLikes: (state, action) => {
      state.likes = action.payload;
    },
    addKeyword: (state, action) => {
      state.keyword = action.payload;
    },
    addhot_word: (state, action) => {
      state.hot_words = action.payload;
    },
    addNotice: (state, action) => {
      state.notices.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGroups.pending, (state) => {
        state.status = '세상에서 가장 지루한 중학교는? 로딩중...';
      })
      // .addCase(fetchGroups.fulfilled, (state, action) => {
      //   state.status = "성공하면 혁명";
      //   state.groups = action.payload;
      // })
      .addCase(fetchGroups.fulfilled, (state, action) => {
        state.status = '성공하면 혁명';
        if (Array.isArray(action.payload)) {
          state.groups = action.payload;
        } else {
          state.groups = []; // 혹은 action.payload.groups 같은 정확한 배열로 설정
        }
      })
      .addCase(fetchGroups.rejected, (state, action) => {
        state.status = '실패하면 반역';
        state.error = action.error.message;
      });
  },
});

export const { addGroup, setLikes, addKeyword, addhot_word, addNotice } =
  communitySlice.actions;

export default communitySlice.reducer;
