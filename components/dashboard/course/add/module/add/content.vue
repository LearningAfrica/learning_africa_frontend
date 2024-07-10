<script lang="ts" setup>
import { AxiosError } from "axios";
import { useForm } from "vee-validate";
import type { CreateCourseContentType } from "~/data";
import { createCourseContentSchema } from "~/data";

const props = defineProps<{
  course_id: number;
  module_id: number;
}>();
const fileUpload = useUseImageUpload("create-course-content-file", "single");
const imageUpload = useUseImageUpload("create-course-content-image", "single");
const router = useRouter();
const options = reactive({
  modules: {
    toolbar: [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],
      ["link", "image", "video", "formula"],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction

      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      ["clean"], // remove formatting button
    ],
  },
});

const content_types = [
  {
    value: "file",
    label: "File type",
  },
  {
    value: "image",
    label: "Image type",
  },
  {
    value: "text",
    label: "Text type",
  },
  {
    value: "video",
    label: "video type",
  },
];
const { $privateAxios, $notify } = useNuxtApp();
const isLoading = ref(false);
const form = useForm<CreateCourseContentType>({
  validationSchema: createCourseContentSchema,
});
const controller = ref<AbortController>();
const [text] = form.useFieldModel(["text"]);
// const emit = defineEmits<{
// 	(event: 'close', value: boolean): void
// }>()
const submitForm = form.handleSubmit(async (values) => {
  isLoading.value = true;
  controller.value = new AbortController();
  try {
    await $privateAxios.post(
      `/api/courses/${Number(props.course_id)}/modules/${Number(
        props.module_id
      )}/contents/`,
      values,
      {
        signal: controller.value.signal,
      }
    );
    await $notify.fire("Module created successfully", "success");
    imageUpload.clearFiles();
    fileUpload.clearFiles();
    await router.push({
      name: "dashboard-instructor-courses-id-module_id",
      params: { id: props.course_id, module_id: props.module_id },
    });
    // emit('close', false)
    // emit('close', response.data)
  } catch (error) {
    if (error instanceof AxiosError) {
      $notify.fire({
        title: "",
        text: error.response?.data.detail ?? "Something went wrong!",
        timer: 2000,
      });
    }
  } finally {
    isLoading.value = false;
  }
  console.log({ values });
});
const abortRequest = () => {
  controller.value?.abort();
  // is_loading.value = false
};

onUnmounted(() => {
  if (controller.value) controller.value?.abort();
});
</script>
<template>
  <div>
    <div class="flex items-center justify-center bg-white bg-opacity-70">
      <div class="bg-white p-6 rounded-lg w-full">
        <h1 class="text-xl font-bold text-primary mb-4">Create Module Content</h1>
        <!-- {{ form.errors }} -->

        <form
          v-if="!isLoading"
          action=""
          class="w-full h-full max-w-2xl p-4 flex flex-col gap-4"
          @submit.prevent.stop="submitForm"
        >
          <!-- Title -->
          <cn-form-field
            #="{ componentField }"
            as="div"
            :name="'title'"
            class="flex flex-col gap-2 w-full"
          >
            <cn-form-label for="title">Title</cn-form-label>
            <cn-form-control>
              <cn-input v-bind="componentField" name="title" placeholder="Module title" />
            </cn-form-control>
            <cn-form-message />
          </cn-form-field>
          <!-- Content type -->
          <cn-form-field
            #="{ componentField }"
            as="div"
            :name="'content_type'"
            class="flex flex-col gap-2 w-full"
          >
            <cn-form-item>
              <cn-form-label for="content_type">Content type</cn-form-label>
              <cn-select v-bind="componentField">
                <cn-form-control>
                  <cn-select-trigger>
                    <cn-select-value :placeholder="'Select content type'" />
                  </cn-select-trigger>
                </cn-form-control>
                <cn-select-content>
                  <cn-select-group class="">
                    <cn-select-item
                      :value="cat.value"
                      :key="cat.value"
                      v-for="cat of content_types"
                      >{{ cat.label }}</cn-select-item
                    >
                  </cn-select-group>
                </cn-select-content>
              </cn-select>
              <cn-form-message />
            </cn-form-item>
          </cn-form-field>
          <!-- Url -->
          <cn-form-field
            v-if="form.values.content_type === 'video'"
            #="{ componentField }"
            as="div"
            :name="'url'"
            class="flex flex-col gap-2 w-full"
          >
            <cn-form-label for="url">Video Url</cn-form-label>
            <cn-form-control>
              <cn-input
                v-bind="componentField"
                type="url"
                name="url"
                placeholder="video url"
              />
            </cn-form-control>
            <cn-form-message />
          </cn-form-field>
          <!-- Text -->
          <!-- <cn-form-field
            v-if="form.values.content_type === 'text'"
            #="{ componentField }"
            as="div"
            :name="'text'"
            class="flex flex-col gap-2 w-full"
          >
            <cn-form-label for="text">Text</cn-form-label>
            <cn-form-control>
              <cn-textarea
                v-bind="componentField"
                name="text"
                placeholder="Content text"
              />
            </cn-form-control>
            <cn-form-message />
          </cn-form-field> -->
          <div class="border">
            <quill-editor
              v-if="form.values.content_type === 'text'"
              theme="snow"
              v-model:content="text"
              :contentType="'html'"
              :options="options"
              class="h-full"
            ></quill-editor>
          </div>
          <!-- Image -->
          <div
            v-if="form.values.content_type === 'image'"
            class="flex flex-col gap-2 w-full"
          >
            <div class="flex justify-center">
              <img
                v-if="imageUpload.has_previews.value"
                :src="
                  imageUpload.uploaded_previews.value['create-course-content-image'][0]
                    .preview
                "
                class="max-w-52 max-h-52"
              />
            </div>
            <label
              for="image"
              class="w-full p-4 border-4 rounded-lg border-gray-500 border-dotted flex justify-center items-center"
            >
              <input
                name="image"
                id="image"
                type="file"
                accept="image/*"
                hidden
                @change="imageUpload.handleFileUpload"
              />
              <div class="flex flex-col justify-center items-center">
                <Icon
                  :name="'humbleicons:upload'"
                  class="text-3xl text-slate-400 rounded-full"
                />

                <span class=""> Click to upload </span>
              </div>
            </label>
          </div>
          <!-- File -->
          <div
            v-if="form.values.content_type === 'file'"
            class="flex flex-col gap-2 w-full"
          >
            <!-- 
								<div class="flex justify-center">
									<img v-if="fileUpload.has_previews.value"
										:src="fileUpload.uploaded_previews.value['create-course-content-file'][0].preview"
										class="max-w-52 max-h-52" />
								</div> -->
            <label
              for="file"
              class="w-full p-4 border-4 rounded-lg border-gray-500 border-dotted flex justify-center items-center"
            >
              <input
                name="file"
                id="file"
                type="file"
                accept="image/*"
                hidden
                @change="fileUpload.handleFileUpload"
              />
              <div class="flex flex-col justify-center items-center">
                <Icon
                  :name="'humbleicons:upload'"
                  class="text-3xl text-slate-400 rounded-full"
                />

                <span class=""> Click to upload </span>
              </div>
            </label>
          </div>
          <!-- Submit button -->
          <cn-button
            type="submit"
            class="bg-primary text-white p-2 rounded-lg w-full gap-2 text-sm"
          >
            <icon :name="'fa-regular:save'" />
            <span> Save </span>
          </cn-button>
        </form>
        <spin-loader
          :controller="controller!"
          :on-abort-request="abortRequest"
          :is_loading="isLoading"
          v-if="isLoading"
        />
      </div>
    </div>
  </div>
</template>
