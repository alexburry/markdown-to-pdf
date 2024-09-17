"use client";

import MarkdownConverter from "@/components/markdown-converter";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  buffer: z.string().min(1),
});

function MarkdownForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onClear = () => {
    console.log("clear");
    form.resetField("buffer");
  };

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    MarkdownConverter(data.buffer);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="buffer"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Convert your markdown text!</FormLabel>
              <FormControl>
                <Textarea
                  className="w-[720px] h-[700px] resize-none"
                  placeholder="Start pasting..."
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex justify-around">
          <Button type="reset" variant={"link"} onClick={onClear}>
            Clear
          </Button>
          <Button className="w-40" type="submit">
            Convert
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default MarkdownForm;
